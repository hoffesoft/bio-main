import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinkInBio from "./pages/LinkInBio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LinkInBio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
