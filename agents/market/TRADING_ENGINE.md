# TRADING ENGINE AGENT

## Objective
Build the game's first real market/trading simulation layer. The player should progress from market observation to practice, then controlled trading, portfolio management and eventually advanced strategies.

## System contract

Inputs:
- player age and skills
- capital
- selected instrument
- market session/regime
- deterministic market seed
- order parameters

Outputs:
- market bars/ticks
- account equity
- cash
- positions
- unrealized/realized P&L
- fees/slippage
- risk metrics
- trade journal events

## Build sequence

1. Instrument definitions and market clock.
2. Deterministic price generator with seed support.
3. OHLC bar engine and volatility regimes.
4. Portfolio/account ledger.
5. Market/limit/stop order model.
6. Position and P&L engine.
7. Risk rules and position sizing.
8. Trading sessions and unlock gates.
9. Strategy interface.
10. UI integration.

## Game design principle

The simulator should reward process, skill and capital preservation rather than simply clicking for guaranteed money. Early gameplay uses simulated practice; real in-game capital becomes exposed as trading access improves.

## Validation

Every financial calculation must have unit tests. Use deterministic seeds so bugs can be reproduced. Keep market generation separate from order execution so strategies cannot alter the underlying market.
