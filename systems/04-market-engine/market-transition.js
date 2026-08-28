import { createRng, nextBar } from './market-engine.js';
import { INSTRUMENTS } from './instruments.js';

export function advanceMarket(market, symbols = Object.keys(INSTRUMENTS)) {
  const next = structuredClone(market);
  const rng = createRng(next.seed ?? 1);
  next.instruments ??= {};
  for (const symbol of symbols) {
    const instrument = INSTRUMENTS[symbol];
    if (!instrument) continue;
    const previous = next.instruments[symbol]?.price ?? instrument.startPrice;
    const bar = nextBar(previous, instrument, rng);
    next.instruments[symbol] = { symbol, price: bar.close, previousPrice: previous, bar };
  }
  next.seed = (next.seed ?? 1) + 1;
  return next;
}

export function getPrices(market) {
  return Object.fromEntries(Object.entries(market.instruments ?? {}).map(([symbol, value]) => [symbol, value.price]));
}
