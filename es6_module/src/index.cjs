(async () => {
 const a =  await  import('./import.js');
 console.log(a.counter2)
 })();