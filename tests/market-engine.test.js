import assert from 'node:assert/strict';
import {INSTRUMENTS} from '../systems/04-market-engine/instruments.js';
import {generateBars} from '../systems/04-market-engine/market-engine.js';
import {createAccount,openPosition,closePosition} from '../systems/05-trading/portfolio.js';
import {positionSize,canTrade} from '../systems/05-trading/risk.js';

const a=generateBars(INSTRUMENTS.XAUUSD,5,42);const b=generateBars(INSTRUMENTS.XAUUSD,5,42);assert.deepEqual(a,b);assert.equal(a.length,5);
const account=createAccount(1000);openPosition(account,{symbol:'XAUUSD',side:'long',quantity:1,price:100});closePosition(account,{symbol:'XAUUSD',price:110});assert.equal(account.cash,1010);assert.equal(account.realizedPnl,10);
assert.equal(positionSize({equity:1000,entry:100,stop:95,riskPercent:.01}),2);assert.equal(canTrade({age:17,mode:'Strategy Trading',skills:{trading:10}}).allowed,false);assert.equal(canTrade({age:22,mode:'Full Trading Simulator',skills:{trading:5}}).allowed,true);
console.log('market-engine tests passed');
