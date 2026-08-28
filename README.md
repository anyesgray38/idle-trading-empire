# Idle Trading Empire

A mobile-first life, trading, business, social and generational empire simulator.

## Prototype v0.1

The first playable shell implements:
- Birth/start-of-life setup
- Real-world starting location selection
- Starting attribute allocation: Charisma, Intelligence, Discipline, Leadership
- $500 starting cash
- Bicycle + low-income apartment
- Day/year aging clock
- Life events and financial news feed
- Market snapshot
- Four trading modes
- Social fame prototype
- Reputation/community progression
- Assets and net-worth display

## Production architecture

The project is now organized as a modular product system rather than a UI-only prototype.

- `agents/` — Markdown control plane for game direction, domains, QA, analytics, publishing, and growth.
- `systems/` — deterministic game-domain implementation.
- `docs/product/` — production scope and release roadmap.
- `tests/` — executable rules and regression coverage.
- `.github/workflows/` — automated validation.

The core simulator is designed around deterministic state transitions so online play and offline progression can share the same simulation rules.

## Long-term design

The planned game includes realistic financial simulation, manual/assisted/strategy/auto trading modes, strategy bots, education, mentors, businesses, persistent employees and NPCs, global locations, social platforms, trading communities, crime/legal systems, taxes, credit, debt, leverage, dynamic world events and multi-generational succession.

## Development

Current production branch: `build/production-foundation`

The prototype remains intentionally modular. Complex systems will be unlocked progressively so new players are not overwhelmed.
