const UNLOCKS = [
  { id: 'paper_trading', level: 1, label: 'Paper Trading' },
  { id: 'basic_strategy', level: 2, label: 'Basic Strategies' },
  { id: 'advanced_orders', level: 4, label: 'Advanced Orders' },
  { id: 'businesses', level: 6, label: 'Businesses' },
  { id: 'employees', level: 8, label: 'Employees' },
  { id: 'empire', level: 10, label: 'Empire Systems' }
];

export function availableUnlocks(level) {
  return UNLOCKS.filter((unlock) => unlock.level <= level);
}

export function applyUnlocks(player) {
  const owned = new Set(player.unlocks ?? []);
  const newlyUnlocked = [];
  for (const unlock of availableUnlocks(player.level ?? 1)) {
    if (!owned.has(unlock.id)) {
      owned.add(unlock.id);
      newlyUnlocked.push(unlock);
    }
  }
  player.unlocks = [...owned];
  return newlyUnlocked;
}
