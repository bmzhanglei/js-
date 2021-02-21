// let obj = Object.create({a:1},{
//     b:{
//         value:4,
//         enumerable:true
//     },
//     c:{
//         value:77,
//         configurable:true,
//         writable:true,
//         enumerable:true
//     }
//    })

//     // obj.c=888

//     // console.log(obj.__proto__.a)
//     // console.log(obj)

//      let c = {}
//   let newObj =  Object.assign(c,obj)

//   delete newObj.b

//   console.log(newObj)

const source = {
    a:1,
    get b(){
        return 2
    }
}

Object.myAssign = function(target,...sources){
  sources.forEach(source=>{
      const descriptors = Object.keys(source).reduce((descriptors,key)=>{
          descriptors[key] = Object.getOwnPropertyDescriptor(source,key)
          console.log(descriptors[key] )
          return descriptors
      },{})   
      Object.defineProperties(target,descriptors)  
  })
  return target
}

//   let c = {}

//   let res = Object.myAssign(c,source)
//   console.log(res)

function Test(){
  this.a = 1
  this.b=2
}
Test.prototype.c = "c"

const test = new Test()

const bb = {
  a:1
}

// console.log(bb.hasOwnProperty("a"))

// console.log( Object.entries(test))
const c = {}
Object.defineProperties(c,{
  a:{
      value:1,
      enumerable:true
  },
  b:{
      value:2
  }
})

let cc = Object.entries(c)
// // console.log( Object.entries(c))
// /*
// [ [ 'a', 1 ]，['b',2] ]
// */
// const a = new Map(cc) //必须是可迭代的对象

// console.log( a)

//  let ccc = Object.fromEntries(cc)
//  console.log(ccc==c)

// Object.deepFreeze = (o)=>{
//   const keys = Object.getOwnPropertyNames(o)
//   if(keys.length){
//       keys.forEach(k=>{
//           const _value = o[k]
//           if(typeof _value === "object" && typeof _value !== null){
//               Object.deepFreeze(_value)
//           }
//       })
//   }
//   return Object.freeze(o)
// }

// let oo = {a:1,b:{bb:{bbb:"bb"}}}
// let ccc = Object.deepFreeze(oo)

// oo.b.bb.bbb="cc"
// console.log(oo === ccc)