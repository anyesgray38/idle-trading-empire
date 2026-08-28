# Phase 4 — Trading & Economy Core

## Objective
Turn market simulation into a validated player economy.

## Build sequence
1. Order lifecycle and rejection reasons
2. Buying power and cash reservation
3. Fees and slippage
4. Risk limits and leverage as explicit configuration
5. Debt and credit rules
6. Portfolio/account invariants
7. XP and progression hooks
8. Analytics events

## Invariants
- No negative cash without an explicit debt/credit rule.
- No invalid or non-finite positions.
- P&L changes only through domain execution.
- Identical deterministic inputs produce identical outputs.
