export class TickEngine {
  constructor({ stepMs = 1000, now = () => Date.now() } = {}) {
    if (!Number.isFinite(stepMs) || stepMs <= 0) throw new Error('stepMs must be positive');
    this.stepMs = stepMs;
    this.now = now;
  }

  simulate({ state, elapsedMs, step = this.stepMs, onTick }) {
    if (!Number.isFinite(elapsedMs) || elapsedMs < 0) throw new Error('elapsedMs must be non-negative');
    if (!Number.isFinite(step) || step <= 0) throw new Error('step must be positive');
    if (typeof onTick !== 'function') throw new Error('onTick is required');

    let remaining = elapsedMs;
    let ticks = 0;
    let nextState = state;

    while (remaining > 0) {
      const deltaMs = Math.min(step, remaining);
      nextState = onTick(nextState, deltaMs, ticks);
      remaining -= deltaMs;
      ticks += 1;
    }

    return { state: nextState, ticks, elapsedMs };
  }
}
