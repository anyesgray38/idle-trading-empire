import { awardXp } from './progression.js';
import { applyUnlocks } from './unlocks.js';

const XP_REWARDS = {
  'position.opened': 5,
  'position.closed': 10,
  'profit.realized': 15,
  'loss.realized': 5
};

export function processProgression(player, events = []) {
  const progressionEvents = [];
  for (const event of events) {
    const amount = XP_REWARDS[event.type] ?? 0;
    if (!amount) continue;
    const result = awardXp(player, amount, event.type);
    progressionEvents.push({ type: 'xp.awarded', amount, reason: event.type, level: result.level });
    if (result.leveledUp) progressionEvents.push({ type: 'level.up', level: result.level });
  }
  for (const unlock of applyUnlocks(player)) {
    progressionEvents.push({ type: 'unlock.granted', unlockId: unlock.id, level: unlock.level });
  }
  return progressionEvents;
}
