export function createInitialState(now = Date.now()) {
  return { meta:{schemaVersion:1,simulationTime:now,lastSimulatedAt:now}, player:{cash:500,level:1,xp:0,attributes:{charisma:1,intelligence:1,discipline:1,leadership:1}}, wallet:{cash:500,reservedCash:0}, portfolio:{positions:[],realizedPnl:0,unrealizedPnl:0}, market:{seed:1,instruments:{}}, economy:{income:0,expenses:0,debt:0,reputation:0}, stats:{ticks:0,trades:0,profitableTrades:0,totalPnl:0} };
}
export function cloneState(state){return structuredClone(state);}
