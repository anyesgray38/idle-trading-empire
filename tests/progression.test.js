import test from 'node:test';
import assert from 'node:assert/strict';
import { awardXp, calculateLevel, processProgression } from '../systems/01-state/index.js';

test('level calculation is deterministic', () => {
  assert.equal(calculateLevel(0), 1);
  assert.equal(calculateLevel(100), 2);
  assert.equal(calculateLevel(250), 3);
});

test('xp awards produce level-up event', () => {
  const player = { xp: 90, level: 1, unlocks: [] };
  const result = awardXp(player, 10, 'test');
  assert.equal(player.xp, 100);
  assert.equal(player.level, 2);
  assert.equal(result.leveledUp, true);
});

test('trading events feed progression without changing trading state', () => {
  const player = { xp: 0, level: 1, unlocks: [] };
  const events = processProgression(player, [{ type: 'position.opened' }, { type: 'position.closed' }]);
  assert.equal(player.xp, 15);
  assert.equal(player.level, 1);
  assert.equal(events.filter((e) => e.type === 'xp.awarded').length, 2);
  assert.ok(player.unlocks.includes('paper_trading'));
});
