export const INSTRUMENTS={
  XAUUSD:{symbol:'XAUUSD',name:'Gold',assetClass:'metals',startPrice:2650,tickSize:0.01,volatility:0.012},
  XAGUSD:{symbol:'XAGUSD',name:'Silver',assetClass:'metals',startPrice:31.2,tickSize:0.001,volatility:0.018},
  BTCUSD:{symbol:'BTCUSD',name:'Bitcoin',assetClass:'crypto',startPrice:95000,tickSize:1,volatility:0.035},
  EURUSD:{symbol:'EURUSD',name:'Euro / US Dollar',assetClass:'fx',startPrice:1.08,tickSize:0.00001,volatility:0.006}
};

export const SESSIONS={ASIA:{name:'Asia',startHour:19,endHour:0},LONDON:{name:'London',startHour:2,endHour:5},NEW_YORK:{name:'New York',startHour:7,endHour:11},OVERLAP:{name:'London / New York overlap',startHour:7,endHour:11}};
