export function riskPercentForSkill(tradingSkill=0,discipline=0){return Math.min(0.02,0.005+tradingSkill*0.0001+discipline*0.0002);}

export function positionSize({equity,entry,stop,riskPercent}){const riskCash=equity*Math.max(0,Math.min(riskPercent,0.02));const distance=Math.abs(entry-stop);if(distance===0)return 0;return riskCash/distance;}

export function canTrade({age,mode,skills}){if(age<18)return{allowed:false,reason:'Trading access unlocks at age 18.'};if(mode==='Full Trading Simulator'&&age<22)return{allowed:false,reason:'Full trading unlocks at age 22.'};if((skills?.trading||0)<5)return{allowed:false,reason:'Reach Trading Skill 5 through practice first.'};return{allowed:true,reason:''};}
