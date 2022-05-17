

   //函数节流
//    function throttle(fn,delay){
//        var last = 0
//        return function () {
//            var now = Date.now()
//            if(now-last > delay){
//                fn.call(this)
//                last = now
//            }
//        }
//    }

//    function debounce(fn,delay) {
//     var a
//     return function() {
//         if(a){
//             clearTimeout(a)
//         }        
//         a = setTimeout(()=>{
//             fn.call(this)
//         },delay)        
//     }       
//   }

// function currying(fn){
//       return function curried(...arg) {
//           if(arg.length>=fn.length){
//               return fn.apply(null,arg)
//           }else{
//               return function (...arg2) {
//                   return curried.apply(null,arg.concat(arg2)) 
//               }
//           }
//       }
//   }

setTimeout(()=>{
    console.log(1) 
  },0)
  let a=new Promise((resolve)=>{
     console.log(2)
     resolve(3)
  }).then(()=>{
    console.log(3) 
    return 3
  }).then(()=>{
    console.log(4) 
    return 4
  })
  console.log(5) 

  // 2 5 3 4 1