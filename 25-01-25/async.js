function DoubleAfterEverySecond(n){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const result=n*2;
            resolve(result);
        } ,10000);
    });
}
async
 let a=await DoubleAfterEverySecond(a)
      let b=await DoubleAfterEverySecond(b)
      let c=await DoubleAfterEverySecond(c)
      console.log(a+b+c);
