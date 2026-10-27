const t0=performance.now();let n=0;
while(performance.now()-t0<20000){
  const a=Array.from({length:20000},(_,i)=>({id:i,v:(i*7919)%10007,s:'item'+i}));
  const b=JSON.parse(JSON.stringify(a));b.sort((x,y)=>x.v-y.v||x.id-y.id);n++;
}
console.log('bench iterations in 20s:',n);
