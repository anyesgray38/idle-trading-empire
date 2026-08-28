# Phase 3 — Market Integration

## Objective
Make the existing market and trading systems first-class participants in the deterministic simulation.

## Delivered
- Seeded market transition layer
- Instrument price state
- Market price lookup boundary
- Trading intent validation
- Position open/close events
- Portfolio mark-to-market
- Simulation-to-market-to-trading integration
- Regression coverage

## Architecture

`tick -> market transition -> prices -> validated intent -> execution -> portfolio -> state/events`

## Constraints
The simulator remains API-independent. The client cannot directly mutate market prices or P&L.

## Next
Build the complete order lifecycle, buying power, fees/slippage, risk limits, and portfolio invariants before expanding the UI.
