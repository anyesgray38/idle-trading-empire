# ORCHESTRATOR

## Mission
Route every future build into the correct folder/layer, keep systems modular, and prevent game rules from leaking into the UI.

## Routing order

1. Read `docs/architecture/README.md`.
2. Identify the smallest affected domain.
3. Read that domain's `AGENT.md` before changing code.
4. Implement deterministic logic in `scripts/` or `systems/`.
5. Add/execute tests for the changed rule.
6. Connect the UI only after the domain logic is valid.
7. Update documentation when a new system or contract is introduced.

## Trading build route

For the current phase, route work through:

`agents/market/TRADING_ENGINE.md`
→ `systems/04-market-engine/`
→ `systems/05-trading/`
→ `scripts/`
→ `tests/`
→ `ui/`

## Hard boundaries

- No API dependency for the core simulator.
- No random price mutation directly inside UI handlers.
- No trading P&L calculations in HTML.
- No hidden global state between systems.
- Seeded/deterministic calculations must be testable independently.
