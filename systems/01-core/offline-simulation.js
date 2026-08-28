import { TickEngine } from './tick-engine.js';

export function simulateOffline({ state, lastSimulationAt, currentTime = Date.now(), stepMs = 1000, onTick }) {
  if (!Number.isFinite(lastSimulationAt)) throw new Error('lastSimulationAt is required');
  if (!Number.isFinite(currentTime)) throw new Error('currentTime must be numeric');
  if (currentTime < lastSimulationAt) throw new Error('currentTime cannot precede lastSimulationAt');

  const engine = new TickEngine({ stepMs });
  const result = engine.simulate({
    state,
    elapsedMs: currentTime - lastSimulationAt,
    onTick
  });

  return {
    ...result,
    lastSimulationAt: currentTime,
    simulatedFrom: lastSimulationAt,
    simulatedTo: currentTime
  };
}
