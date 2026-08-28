import test from 'node:test';
import assert from 'node:assert/strict';
import { createOrder, fillOrder, rejectOrder } from '../systems/05-trading/order-engine.js';
import { checkBuyingPower } from '../systems/05-trading/risk-engine.js';

test('order lifecycle moves submitted to filled', () => {
  const order = createOrder({ action:'open', symbol:'XAUUSD', side:'long', quantity:0.1 }, 1000);
  const filled = fillOrder(order, 2600, 2000);
  assert.equal(filled.status, 'filled');
  assert.equal(filled.fillPrice, 2600);
});

test('order lifecycle records rejection reason', () => {
  const order = createOrder({ action:'open', symbol:'XAUUSD', side:'long', quantity:1 }, 1000);
  const rejected = rejectOrder(order, 'insufficient_buying_power', 1001);
  assert.equal(rejected.status, 'rejected');
  assert.equal(rejected.rejectReason, 'insufficient_buying_power');
});

test('buying power blocks oversized trades', () => {
  const result = checkBuyingPower({ cash:500 }, { quantity:1 }, 1000);
  assert.equal(result.ok, false);
});
