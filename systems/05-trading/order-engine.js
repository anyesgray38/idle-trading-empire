export function createOrder(intent, timestamp) {
  return { id: `order:${timestamp}:${intent.symbol}`, status: 'submitted', submittedAt: timestamp, ...intent };
}

export function fillOrder(order, price, timestamp) {
  if (order.status !== 'submitted') throw new Error('Order is not fillable');
  if (!Number.isFinite(price) || price <= 0) throw new Error('Invalid fill price');
  return { ...order, status: 'filled', filledAt: timestamp, fillPrice: price };
}

export function rejectOrder(order, reason, timestamp) {
  if (order.status !== 'submitted') throw new Error('Order is not rejectable');
  return { ...order, status: 'rejected', rejectedAt: timestamp, rejectReason: reason };
}
