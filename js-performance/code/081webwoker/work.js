//注意：web worker是一个独立的进程，不能操作DOM和BOM
    //适合做大量的运算
    let total = 0
    for(let i = 0;i<100000000;i++){
      total+=i
    }
    self.postMessage({total:total})