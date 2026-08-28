# TELEMETRY AGENT

## Mission
Define measurable player and system events without coupling analytics to gameplay rules.

## Required events
- player_created
- session_started
- session_ended
- tutorial_started
- tutorial_completed
- first_trade
- order_submitted
- order_filled
- order_rejected
- position_opened
- position_closed
- profit_realized
- loss_realized
- level_up
- upgrade_purchased
- market_event_started
- market_event_completed
- offline_simulation_completed
- achievement_unlocked

## Event contract
Every event should contain:
- event name
- schema version
- timestamp
- anonymous player/session identifier
- game build version
- relevant domain payload

## Rules
Analytics must never be required for the simulator to calculate correct game state. Telemetry failures must degrade silently and never change gameplay outcomes.
