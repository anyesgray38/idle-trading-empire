export function checkBuyingPower(account, intent, price, config = {}) {
  const leverage = Number.isFinite(config.leverage) && config.leverage > 0 ? config.leverage : 1;
  const required = Math.abs(intent.quantity * price) / leverage;
  const available = account.cash ?? 0;
  if (required > available) return { ok: false, reason: 'insufficient_buying_power', required, available };
  return { ok: true, required, available };
}
