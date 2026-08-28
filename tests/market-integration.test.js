import test from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState } from '../systems/01-state/state.js';
import { createTickEngine } from '../systems/03-simulation/tick-engine.js';
import { createGameSimulation } from '../systems/03-simulation/game-simulation.js';
import { getPrices } from '../systems/04-market-engine/market-transition.js';

function buildEngine() {
  return createTickEngine({ intervalMs: 1000, processTick: createGameSimulation({ symbols: ['XAUUSD'] }) });
}

test('market transition is deterministic for identical initial state', () => {
  const a = buildEngine().step(createInitialState(0), 1000).state;
  const b = buildEngine().step(createInitialState(0), 1000).state;
  assert.deepEqual(a.market, b.market);
});

test('simulation creates a tradable market price', () => {
  const result = buildEngine().step(createInitialState(0), 1000);
  assert.ok(Number.isFinite(getPrices(result.state.market).XAUUSD));
  assert.equal(result.state.meta.lastSimulatedAt, 1000);
});

test('trade intent opens a position through the domain', () => {
  const simulation = createGameSimulation({ symbols: ['XAUUSD'], tradeIntentProvider: () => ({ action: 'open', symbol: 'XAUUSD', side: 'long', quantity: 1 }) });
  const result = createTickEngine({ intervalMs: 1000, processTick: simulation }).step(createInitialState(0), 1000);
  assert.ok(result.state.tradingAccount.positions.XAUUSD);
  assert.equal(result.events.some((event) => event.type === 'position.opened'), true);
});
