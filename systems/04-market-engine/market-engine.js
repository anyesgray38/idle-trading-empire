export function createRng(seed=1){let s=(seed>>>0)||1;return()=>{s=(1664525*s+1013904223)>>>0;return s/4294967296;};}

export function nextBar(prevPrice,instrument,rng){const r1=Math.max(rng(),1e-9);const r2=Math.max(rng(),1e-9);const shock=Math.sqrt(-2*Math.log(r1))*Math.cos(2*Math.PI*r2);const move=shock*instrument.volatility;const open=prevPrice;const close=Math.max(instrument.tickSize,open*(1+move));const spread=Math.abs(close-open);const high=Math.max(open,close)*(1+rng()*instrument.volatility*.35);const low=Math.min(open,close)*(1-rng()*instrument.volatility*.35);return{open,high,low,close,changePct:(close/open-1)*100};}

export function generateBars(instrument,count=100,seed=1){const rng=createRng(seed);const bars=[];let price=instrument.startPrice;for(let i=0;i<count;i++){const bar=nextBar(price,instrument,rng);bars.push({...bar,index:i});price=bar.close;}return bars;}
