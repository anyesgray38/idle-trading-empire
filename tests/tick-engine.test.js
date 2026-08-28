import test from 'node:test';
import assert from 'node:assert/strict';
import { TickEngine } from '../systems/01-core/tick-engine.js';
import { simulateOffline } from '../systems/01-core/offline-simulation.js';

test('tick engine processes deterministic elapsed time', () => {
  const engine = new TickEngine({ stepMs: 1000 });
  const result = engine.simulate({
    state: { cash: 0 },
    elapsedMs: 3500,
    onTick: (state, deltaMs) => ({ cash: state.cash + deltaMs / 1000 })
  });

  assert.equal(result.ticks, 4);
  assert.equal(result.state.cash, 3.5);
});

test('offline simulation advances state to current time', () => {
  const result = simulateOffline({
    state: { units: 0 },
    lastSimulationAt: 1000,
    currentTime: 3500,
    stepMs: 1000,
    onTick: (state, deltaMs) => ({ units: state.units + deltaMs })
  });

  assert.equal(result.state.units, 2500);
  assert.equal(result.lastSimulationAt, 3500);
  assert.equal(result.simulatedFrom, 1000);
  assert.equal(result.simulatedTo, 3500);
});
