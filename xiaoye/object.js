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



// var obj = {}
// obj.a = 1

// var newObj = new Object(obj);
// console.log(newObj === obj) // true

//function  Array Object -> 引用值 -> Object.prototype

// var arr = [1,3,4]
// var newArr = new Object(arr)
// console.log(arr === newArr) //true

// console.log(new Array(arr))

// var a = 1
// a.b = 2  //原始值不能添加属性
// console.log(a.b) //undefined

// var aa = 1   //原始值
// var newA = new Number(a)
// console.log(newA) //引用值
// console.log(aa === newA) //false
// console.log(aa == newA) //true


//Object.keys   Object.getOwnPropertyNames
// var obj3 = {
//     a:1,
//     b:2
// }

// Object.defineProperty(obj3,'b',{
//   enumerable:false
// })
// console.log(Object.keys(obj3))
// //忽略描述符 - enumerable:false
// console.log(Object.getOwnPropertyNames(obj3))

//稀疏数组  empty -> null undefined
// const arr = [1,2,,,,4,,,5]
// const arrNew = arr.find((item,index)=>{ //会打印出 undefined
//    return index === 3
// })
// console.log(arrNew)

// arr.forEach((item,index) =>{  //忽略所有的empty
//    console.log(item,index)
// })

Array.from.length   //函数形参的长度 1

//没有参数报错  默认 undefined Array.from(undefined)  
// 只能接受类数组或可迭代对象
//Array.from()  

// var obj4 = {a:1,b:2,length:2}
// Array.from(obj4) //[undefined,undefined]

//把函数拿出来单独使用
var obj5 = {
  get a(){
    return Math.random()>=0.5?1:0
  }
}

const round = obj5.__lookupGetter__('a');
const round2 = Object.getOwnPropertyDescriptor(obj5,"a").get;

console.log(round)
console.log(round2)

//如果只要get 
let obj6={}
// Object.defineProperty(obj,"a",{
//   get(){
//     return 'get a'
//   }
// })
obj6.__defineGetter__('a',()=>{
  return 'get a'
})
console.log(obj6)