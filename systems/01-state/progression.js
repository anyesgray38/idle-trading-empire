const LEVEL_XP = [0,100,250,500,900,1400,2000,2800,3800,5000];

export function xpForNextLevel(level) {
  if (!Number.isInteger(level) || level < 1) throw new Error('Invalid level');
  return LEVEL_XP[level] ?? Math.round(5000 * Math.pow(1.25, level - 10));
}

export function calculateLevel(xp) {
  if (!Number.isFinite(xp) || xp < 0) throw new Error('XP must be non-negative');
  let level = 1;
  while (xp >= xpForNextLevel(level) && level < 100) level += 1;
  return level;
}

export function awardXp(player, amount, reason = 'unspecified') {
  if (!Number.isFinite(amount) || amount < 0) throw new Error('XP amount must be non-negative');
  const before = player.level ?? 1;
  player.xp = (player.xp ?? 0) + amount;
  player.level = calculateLevel(player.xp);
  return { amount, reason, previousLevel: before, level: player.level, leveledUp: player.level > before };
}

export function createProgressionState() {
  return { xp: 0, level: 1, unlocks: [], skillPoints: 0 };
}
