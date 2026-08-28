# Phase 5 — Player Progression

## Objective
Create the long-term progression layer that converts player actions into meaningful advancement without embedding progression rules in the UI.

## Delivered
- Deterministic XP thresholds
- Level calculation
- XP award domain
- Unlock registry
- Automatic unlock application
- Trading-event progression bridge
- Progression event outputs
- Regression tests

## Core loop

`action -> domain event -> XP -> level -> unlock -> new capability`

## Initial unlock ladder

- Level 1: Paper Trading
- Level 2: Basic Strategies
- Level 4: Advanced Orders
- Level 6: Businesses
- Level 8: Employees
- Level 10: Empire Systems

## Design constraints
- XP is earned only from domain events.
- UI cannot directly award XP or unlock content.
- Level calculation is deterministic.
- Unlocks are idempotent.
- Progression can be expanded without rewriting trading logic.

## Next
Add skill trees, progression costs/rewards, career/life progression, economy income streams, and long-horizon balance simulation before building the progression UI.
