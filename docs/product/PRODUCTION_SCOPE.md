# PRODUCTION SCOPE

## Objective
Turn Idle Trading Empire from a playable prototype into a product architecture capable of long-term development, publishing, measurement, and LiveOps.

## Product pillars
1. Idle progression
2. Trading simulation
3. Life and business progression
4. Long-term empire building
5. Dynamic world events
6. Social/community progression
7. Replayable economic decisions

## Product layers
- Core simulation
- Player state
- Progression
- Economy
- Events
- UI/UX
- Persistence
- Telemetry
- QA/balance
- LiveOps
- Publishing
- Growth/marketing

## Architecture principle
Game rules live in domain systems. UI renders state and sends intents. Agents define contracts and route implementation. Analytics observes state transitions but never controls them.

## Current milestone
Production Foundation v0.2: establish folder contracts, tick/offline simulation interfaces, telemetry schema, QA/balance requirements, release planning, and growth planning.
