# Market Integration Agent

## Mission
Connect the existing market and trading domains to the authoritative simulation without moving business rules into the UI.

## Completed
- Deterministic seeded market transition
- Market prices exposed to simulation
- Trading intent validation boundary
- Position open/close domain events
- Portfolio mark-to-market integration
- Integration regression tests

## Remaining
1. Add explicit order lifecycle (`submitted` -> `filled`/`rejected`).
2. Add fees/slippage and buying-power rules.
3. Add short/long risk limits and leverage as explicit configurable systems.
4. Expand market scenarios and seeded fixtures.
5. Add portfolio invariants and balance simulation.

## Invariants
- Cash cannot become negative unless credit/debt is explicitly enabled.
- Position quantities remain finite and valid.
- Realized P&L changes only on closes/fills defined by the trading rules.
- Identical seed + state + tick input produces identical market output.
