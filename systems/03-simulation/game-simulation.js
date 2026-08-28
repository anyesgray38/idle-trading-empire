import { advanceMarket, getPrices } from '../04-market-engine/market-transition.js';
import { updatePortfolio, submitTrade } from '../05-trading/trading-domain.js';

export function createGameSimulation({ symbols, tradeIntentProvider = () => null } = {}) {
  return function processTick(state, timestamp) {
    const market = advanceMarket(state.market, symbols);
    const next = structuredClone(state);
    next.market = market;
    next.wallet = next.wallet ?? { cash: 500, reservedCash: 0 };
    next.portfolio = next.portfolio ?? { positions: [], realizedPnl: 0, unrealizedPnl: 0 };
    const account = next.tradingAccount ?? {
      cash: next.wallet.cash,
      equity: next.wallet.cash,
      realizedPnl: next.portfolio.realizedPnl ?? 0,
      unrealizedPnl: next.portfolio.unrealizedPnl ?? 0,
      positions: {},
      trades: []
    };
    const prices = getPrices(market);
    const intent = tradeIntentProvider(next, prices, timestamp);
    const events = [];
    if (intent) events.push(submitTrade(account, intent, prices, timestamp));
    updatePortfolio(account, prices);
    next.tradingAccount = account;
    next.wallet.cash = account.cash;
    next.player.cash = account.cash;
    next.portfolio.realizedPnl = account.realizedPnl;
    next.portfolio.unrealizedPnl = account.unrealizedPnl;
    next.stats.totalPnl = account.realizedPnl + account.unrealizedPnl;
    next.stats.trades = account.trades.length;
    return { state: next, events };
  };
}
