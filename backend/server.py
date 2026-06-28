from fastapi import FastAPI, APIRouter, HTTPException, Query
from contextlib import asynccontextmanager
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Global variables for DB
client = None
db = None

@asynccontextmanager
async def lifespan(app: FastAPI):
    global client, db
    mongo_url = os.environ.get('MONGO_URL')
    db_name = os.environ.get('DB_NAME')
    
    if not mongo_url or not db_name:
        logger.error("MONGO_URL or DB_NAME environment variable is missing.")
        raise RuntimeError("Missing MongoDB configuration.")
        
    try:
        client = AsyncIOMotorClient(mongo_url)
        db = client[db_name]
        # Ping the database to verify connection
        await db.command("ping")
        logger.info("Connected to MongoDB.")
    except Exception as e:
        logger.error(f"Could not connect to MongoDB: {e}")
        raise
        
    yield
    
    if client:
        client.close()
        logger.info("MongoDB connection closed.")

# Create the main app with lifespan
app = FastAPI(lifespan=lifespan)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str = Field(..., min_length=1, max_length=100)

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    try:
        status_obj = StatusCheck(client_name=input.client_name)
        
        # Convert to dict and serialize datetime to ISO string for MongoDB
        doc = status_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        
        await db.status_checks.insert_one(doc)
        return status_obj
    except Exception as e:
        logger.error(f"Error inserting status check: {e}")
        raise HTTPException(status_code=500, detail="Database operation failed")

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks(
    skip: int = Query(0, ge=0, description="Skip N items"),
    limit: int = Query(100, ge=1, le=1000, description="Limit to N items")
):
    try:
        # Exclude MongoDB's _id field from the query results and add pagination
        status_checks = await db.status_checks.find({}, {"_id": 0}).skip(skip).limit(limit).to_list(limit)
        
        # Convert ISO string timestamps back to datetime objects
        for check in status_checks:
            if isinstance(check.get('timestamp'), str):
                check['timestamp'] = datetime.fromisoformat(check['timestamp'])
        
        return status_checks
    except Exception as e:
        logger.error(f"Error retrieving status checks: {e}")
        raise HTTPException(status_code=500, detail="Database operation failed")

# Include the router in the main app
app.include_router(api_router)

cors_origins = os.environ.get('CORS_ORIGINS', '*')
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=[origin.strip() for origin in cors_origins.split(',')] if cors_origins else ["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)