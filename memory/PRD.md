# PRD – Link in Bio (Sistemas para Restaurantes & Clínicas)

## Problem Statement
Página estilo "link na bio" enxuta com apenas 3 botões estratégicos:
1. Sistemas para Restaurantes & Delivery (destaque)
2. Sistemas para Clínicas & Consultórios
3. Falar com Consultor via WhatsApp (botão ouro)

Público: donos de restaurante (Manoel Tavares) e médicos (Catolé). Prioridade = velocidade e clareza.

## Architecture
- Frontend: React (CRA) + Tailwind + Framer Motion. Página única em `/app/frontend/src/pages/LinkInBio.jsx`.
- Backend: FastAPI template (não alterado – não há lógica server-side necessária).
- Sem integrações de terceiros nesta fase.

## User Personas
- Dono de restaurante buscando sistema de PDV/delivery.
- Médico/proprietário de clínica buscando agendamento e prontuário.

## Core Requirements
- Página mobile-first, máx-w-md, 3 CTAs, avatar + nome + subtítulo.
- Botão 3 (WhatsApp) com mensagem pré-preenchida via wa.me.

## Implemented (Dec 2025)
- Layout Swiss/high-contrast (light theme) seguindo design_guidelines.json.
- Avatar 3D placeholder, fontes Cabinet Grotesk + Outfit.
- Animação de entrada com stagger via Framer Motion.
- Hover micro-interações (translate, arrow slide).
- Todos elementos com data-testid.

## Backlog
- P0: Substituir placeholders (BRAND_NAME, WHATSAPP_NUMBER, landing pages reais).
- P1: Criar landing pages internas /restaurantes e /clinicas.
- P2: Analytics (clique por CTA), favicon e meta tags SEO.
