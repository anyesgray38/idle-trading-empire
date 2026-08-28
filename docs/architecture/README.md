# Idle Trading Empire — Layered Architecture

The project is organized around **folders + Markdown routing files + small scripts**.

## Rules

1. `agents/` contains orchestration instructions. Markdown files decide what work belongs to each layer and which scripts run.
2. `systems/` contains game-domain modules grouped by layer.
3. `scripts/` contains deterministic, testable calculations and validation helpers.
4. `data/` contains static game configuration and seed data.
5. `tests/` validates isolated systems before they are connected to the UI.
6. `ui/` is presentation only; business rules should not be embedded in HTML.

## Current build layers

- `01-core-state`: player state, time, progression, persistence contracts
- `02-life-simulation`: education, careers, relationships and life choices
- `03-economy`: income, expenses, assets, credit, taxes and economic events
- `04-market-engine`: prices, volatility, sessions, instruments and portfolio state
- `05-trading`: orders, positions, P&L, risk, strategies and execution
- `06-business-empire`: businesses, employees, operations and scaling
- `07-world`: locations, NPCs, events, news and social systems
- `08-generational`: succession, inheritance and multi-generation progression

## Agent routing

Start with `agents/ORCHESTRATOR.md`. The orchestrator routes work to the smallest applicable layer and requires tests before UI integration.
