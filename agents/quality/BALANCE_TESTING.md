# BALANCE TESTING AGENT

## Mission
Find economic exploits, progression dead ends, runaway wealth, and dominant strategies before players do.

## Test classes
- deterministic unit tests
- seeded simulation tests
- long-horizon economy simulations
- player-bot simulations
- progression curve tests
- reward/inflation tests
- exploit and edge-case tests

## Required invariants
- cash and asset accounting reconcile
- realized P&L equals execution-derived P&L
- no action creates value without an explicit rule
- progression cannot skip required unlocks
- offline simulation is equivalent to replaying the same elapsed simulation window
- negative balances are only possible where debt is explicitly supported

## Output
Produce machine-readable failures and a human-readable balance report for each major economy change.
