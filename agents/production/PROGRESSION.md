# Progression Agent

## Mission
Own deterministic player advancement while keeping progression independent from presentation.

## Route
`player/domain events -> systems/01-state -> progression -> unlocks -> tests -> UI`

## Rules
- Never award XP from UI handlers.
- Every unlock has a stable identifier and requirement.
- Progression must be deterministic and replayable.
- Rewards must have explicit balance values.
- Major progression changes require long-horizon balance testing.

## Definition of done
A progression feature requires a Markdown specification, deterministic implementation, tests, event/telemetry contract, and UI integration plan.
