# BUILD 01 — Market Simulation Foundation

Status: implemented

## Deliverables
- Instrument registry
- Trading session definitions
- Seeded deterministic market generator
- OHLC bar generation
- Account ledger
- Long/short position model
- Realized/unrealized P&L
- Basic position sizing
- Age/skill trading gates
- Unit tests

## Next build
BUILD 02 should add a proper execution engine: market/limit/stop orders, spread/slippage, margin, liquidation rules, trade journal metrics and a player-facing chart. Keep those systems separate from market generation.
