import { openPosition, closePosition, markToMarket } from './portfolio.js';

export function submitTrade(account, intent, prices, timestamp = Date.now()) {
  if (!intent?.symbol || !intent?.side || !Number.isFinite(intent.quantity) || intent.quantity <= 0) {
    throw new Error('Invalid trade intent');
  }
  const price = prices[intent.symbol];
  if (!Number.isFinite(price)) throw new Error('Unknown market price');
  if (intent.action === 'open') {
    openPosition(account, { ...intent, price, fee: intent.fee ?? 0 });
    account.positions[intent.symbol].openedAt = timestamp;
    return { type: 'position.opened', timestamp, symbol: intent.symbol, side: intent.side, quantity: intent.quantity, price };
  }
  if (intent.action === 'close') {
    const result = closePosition(account, { symbol: intent.symbol, price, fee: intent.fee ?? 0 });
    return { type: 'position.closed', timestamp, symbol: intent.symbol, price, pnl: result.pnl };
  }
  throw new Error('Unsupported trade action');
}

export function updatePortfolio(account, prices) {
  return markToMarket(account, prices);
}
