// let create = function(obj){
//   var F = function(){}
//   F.prototype = obj
//   return new F()
// }

// console.log(create({})) 
// console.log(Object.create({}))

// var obj1= new Object()
// var obj2 = {}

// console.log(Object.getPrototypeOf(obj1)===Object.prototype)
// // console.log(a())
// console.log(Object.prototype.__proto__)


// function t(params){
//     "use strict"
//     console.log(this)
//     // console.log(params)
// }

// // var obj = {a:1}
// t()
// t.call(obj,"ddd")

// var appendDiv = function(callback){
//     for(var i=0;i<10;i++){
//        var h3 = document.createElement("h3")
//        h3.innerHTML = i;
//        document.body.appendChild(h3)
//        if(typeof callback == "function"){
//            callback(h3,i)
//        }       
//     }
// }
// appendDiv((node,i)=>{
//     node.style.display = i%2==1 ? "none":"block"
// })

// var Singleton = function( name ){ 
//     this.name = name; 
//    }; 
//    Singleton.prototype.getName = function(){ 
//     console.log  ( this.name ); 
//    }; 
//    Singleton.getInstance = (function(){ 
//     var instance = null; 
//     return function( name ){ 
//     if ( !instance ){ 
//     instance = new Singleton( name ); 
//     } 
//     return instance; 
//     } 
//    })();

//    var a = Singleton.getInstance( 'sven1' ); 
// var b = Singleton.getInstance( 'sven2' ); 
// console.log ( a === b ); // tru
// a.getName()
// b.getName()

// var OffLightState = function (light) {
//     this.light = light;
// };
// OffLightState.prototype.buttonWasPressed = function () {
//     console.log('弱光'); // offLightState 对应的行为
//     this.light.setState(this.light.weakLightState); // 切换状态到 weakLightState 
// };
// // WeakLightState：
// var WeakLightState = function (light) {
//     this.light = light;
// };
// WeakLightState.prototype.buttonWasPressed = function () {
//     console.log('强光'); // weakLightState 对应的行为
//     this.light.setState(this.light.strongLightState); // 切换状态到 strongLightState 
// };
// // StrongLightState：
// var StrongLightState = function (light) {
//     this.light = light;
// };
// StrongLightState.prototype.buttonWasPressed = function () {
//     console.log('关灯'); // strongLightState 对应的行为
//     this.light.setState(this.light.offLightState); // 切换状态到 offLightState 
// };

// var Light = function () {
//     console.log(this)
//     this.offLightState = new OffLightState(this);
//     this.weakLightState = new WeakLightState(this);
//     this.strongLightState = new StrongLightState(this);
//     this.button = null;
// };

// Light.prototype.init = function () {
//     var button = document.createElement('button'),
//         self = this;
//     this.button = document.body.appendChild(button);
//     this.button.innerHTML = '开关';
//     this.currState = this.offLightState; // 设置当前状态
//     this.button.onclick = function () {
//         self.currState.buttonWasPressed();
//     }
// };

// Light.prototype.setState = function (newState) {
//     this.currState = newState;
// };

// var light = new Light();
// light.init();

// const btn = document.querySelector("#btn")
// console.log(btn)

// const getKey = (key)=>{
//     return Symbol.for(key)
// }
// const obj = {
//     [getKey('keys')]:"val11"
// }
// console.log(Symbol.for('keys') === Symbol.for("keys"))

// console.log(obj[getKey('keys')])

// var obj = {
//     a:33,
//     val:44
// }

// function method({val=null}={}) {
//     console.log(val)
//     // console.log(Object.prototype.toString.call(...params))
//     // return params 
// }

// // console.log([...'afv'])


// // const newMethod = method.bind(this,obj)

// const newMethod2 = (...args) => method.apply(this,args)
// // // console.log(globalThis === window)
// // console.log(newMethod2())

// function concatenateAll(...args) {
//     console.log(args.join("-") )
//   }

//   const val = concatenateAll("o",'v')

// let arr = [["a",1],[3,88]]
// let map = new Map(arr)
// console.log(map.get(3))

// for(let [k,v] of map){
//     console.log(k,v)
// }
// for(let item of map.entries()){
//     console.log(item)
// }
// arr.splice(0,1)
// console.log(arr)

// async function* gen1() {
//     yield 'a';
//     yield 'b';
//     return 2;
//   }
  
//   async function* gen2() {
//     // result 最终会等于 2
//     const result =  yield* gen1();
//     return result
//   }

//   (async ()=>{
//     for await (const [x,y] of gen2()) {
//         console.log(x,y);
//       }
//   })()


  // let obj = {
  //   * [Symbol.iterator](){
  //     yield "hello"
  //     yield "world"
  //   }
  // }

  // for(let i of obj){
  //   console.log(i)
  // }

  // let obj = {
  //    6:1,
  //    length:4,
  //    push:[].push
  // }

  // obj.push("t")

  // console.log(obj)

  // function  readFile(file) {
  //    return {
  //      [Symbol.iterator](){
  //         return {
  //           next(){
  //             console.log("执行next!")
  //             return {done:false,value:"---"}
  //           },
  //           return(){
  //              file.close()
  //              console.log("执行close!")
  //              return {done:true,value:"over"}
  //           }
  //         }
  //      }
  //    }
  // }
  // const file = {
  //   close(){
  //     console.log("执行closexxxx!")
  //   }
  // }

  // for(let i of readFile(file)){
  //   console.log(i)
  //   throw new Error()
  // }

//   let obj = {
//     0:"res",
//     1:"bbb",
//     * [Symbol.iterator](){
//       yield *[1,2]
//     }
//   }

//  let arr = [1,4,3]

//  for(let [k,v] of arr.entries()){
//     console.log(k,v)
//  }


// let set  = new Set([2,"t",4,"t"])
// // let map = new Map([[2,4],["r","rr"]])
// for(let [i,v] of set.entries()){
//   console.log(i,v)
// }
// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//   });
// }

// timeout(1000).then((value) => {
//   console.log(value);
// });

// const p1 = new Promise(function (resolve, reject) {
//   // setTimeout(() => reject(new Error('fail')), 3000)
//   setTimeout(() => resolve("success!"), 3000)
// })

// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(p1), 1000)
// })

// p2
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
// Error: fail

// const promise = new Promise(function (resolve, reject) {
//   return resolve('ok');
//   setTimeout(function () { throw new Error('test') }, 0)
// });
// promise.then(function (value) { console.log(value) }).catch(err=>{
//   console.log(err)
// });

// Promise.resolve(2).finally(val=>{
//    console.log(this)
// })

// const resolved = Promise.resolve(42);
// const rejected = Promise.reject(-1);

// const allSettledPromise = Promise.allSettled([resolved, rejected]);

// allSettledPromise.then(function (results) {
//   console.log(results);
// });

// console.log(3072000/1024)

// class Point{

// }

// Point.prototype.toStrings = function (a,b) {
//    console.log("toStrings")
// }

// const p = new Point()
// p.__proto__.to = function (params) {
  
// }
// const t = p.__proto__.hasOwnProperty("toStrings")

// console.log(Object.getOwnPropertyNames("to"))

// function selfish (target) {
//   const cache = new WeakMap();
//   const handler = {
//     get (target, key) {
//       const value = Reflect.get(target, key);
//       if (typeof value !== 'function') {
//         return value;
//       }
//       if (!cache.has(value)) {
//         cache.set(value, value.bind(target));
//       }
//       return cache.get(value);
//     }
//   };
//   const proxy = new Proxy(target, handler);
//   return proxy;
// }
// class Logger {
//   constructor() {
//     // this.printName = this.printName.bind(this);
//     // console.log(this)
//     // this.printName = () => this;
//   }
//   printName(name = 'thereuu') {
//     this.print(`Hello ${name}`);
   
//   }

//   print(text) {
//     console.log(text);
//   }
// }
// const logger = selfish(new Logger());

// logger.printName("xxx99")
// logger.printName("xxx9933")
// printName(); 

// class IncreasingCounter {
//   _count = 0;

//   // get value() {
//   //   // this.increment()
//   //   console.log('Getting the current value!');
//   //   return this._count;
//   // }

//   inc(){   
//     this._count++;
//   }
//   increment() {  
//     console.log(this)
 
//     this._count++;
//   }
// }

// const i = new IncreasingCounter()
// const {increment} = i
// increment()
// console.log(i.value)

// class Logger {
//   printName(name = 'there') {
//     this.print(`Hello ${name}`);
//   }

//   print(text) {
//     console.log(text);
//   }
// }

// const log = new Logger()
// const { printName } = logger;
// printName()
// log.printName()

// class C{
//   #count = 3
//   _count = 4
//   get value(){
//     this.#increase()
//     return this.#count
//   }

//   #increase(){
//     this.#count++;
//   }
// }

// const c = new C()

// console.log(c.#increase())

// class FakeMath {
//   constructor(){
//     console.log(new.target)
//   }
  
//   static PI = 22 / 7;
//   static #totallyRandomNumber = 4;

//   static #computeRandomNumber() {
//     return FakeMath.#totallyRandomNumber;
//   }

//   static random() {
//     console.log('I heard you like random numbers…')
//     return FakeMath.#computeRandomNumber();
//   }
// }

// class Point { /* ... */ 
//    hah(){
//      console.log("ah")
//    }
// }
// class ColorPoint extends Point {
    
// }

// const c = new ColorPoint()
// // c.hah()
// class A {
//   constructor() {
//     this.p = 2;
//   }
//   pp(){
//     console.log("PP")
//   }
// }

// class B extends A {
//   constructor(){
//     super()    
//   }
//   get m() {
//     return super.pp();
//   }
// }

// let b = new B();
// b.m
// var e = {};

// const s = Object.getOwnPropertyNames(Error)
// [ 'stack' ]

// const ee = Object.getOwnPropertyNames(e)
// console.log(s)

// console.log(typeof void 0 === typeof y)
// console.log(ee)

// function sum(x, y) {
//   if (y > 0) {
//     return sum.bind(null, x + 1, y - 1);
//   } else {
//     return x;
//   }
// }

// function trampoline(f) {
//   while (f && f instanceof Function) {
//     f = f();
//   }
//   return f;
// }

// console.log(trampoline(sum(1, 100000)))


// function tco(f) {
//   var value;
//   var active = false;
//   var accumulated = [];

//   return function accumulator() {
//     accumulated.push(arguments);
//     if (!active) {
//       active = true;
//       while (accumulated.length) {
//         value = f.apply(this, accumulated.shift());
//       }
//       active = false;
//       return value;
//     }
//   };
// }

// var sum = tco(function(x, y) {
//   if (y > 0) {
//     return sum(x + 1, y - 1)
//   }
//   else {
//     return x
//   }
// });

// console.log(sum(1, 100000)) 

// function haha(a) {
//   if(!a) return a;
//   return haha.bind(null,a-1);
// }

// console.log(haha(100)) ; //输出0
// console.log(trampoline(haha(12345678))) ; //输出0

// let obj = {a:1,b:2}
// let arr = [1,23,4]
// delete(arr[1])
// delete(obj.a)
// console.log(Object.keys(obj))
// console.log(arr.length)

// var obj = new Date();
// obj.valueOf = function () { return 1 };
// // obj.toString = function () { return 'hello' };

// console.log(obj.valueOf() + 2)  // "hello2"

// var obj = {
//   width: '100'
// };
// let v = 20 + obj.width 

// console.log(v)

// function mockData() {
//   let mem = {};
//   return {
//       clear: () => (mem = {}), // 显式暴露清理接口
//       get: page => {
//           if (page in mem) {
//               return mem[page];
//           }
//           mem[page] = Math.random();
//       },
//       set:val=>{

//       }
//   };
// }

// const m = mockData()
// m.get(3)
// let mm = m.get(3)
// m.clear()
// console.log(m.get(3))

// var a = b =5;

// console.log(a)

// const src = '<img src="iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vtI="/>'

// const reg = /data:image\/png;base64,([^"]+)"/g
// let val = reg.exec(src)
// let picBase64 =  val && val[0] && val[0].substr(0,val[0].length-1)
// if(picBase64){
//   let imgHttp = src.replace(reg,'xxxy\"')
//   console.log(imgHttp)
// }

// const s = Symbol()

// let codes = {
//   "49": "Germany",
//   "41": "Switzerland",
//   "44": "Great Britain",
//   // ..,
//   [s]: "USA"
// };

// for(let code in codes) {
//   console.log(code); // 1, 41, 44, 49
// }

// console.log(codes[s])
// let obj={}
// function A() { 
//   return obj
// }
// function B() { 
//   return obj
// }

// let a = new A;
// let b = new B;

// console.log( a === b );


// console.log( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


// const v = [1,2,4].reduce((a,b)=>{return a+=b},0)

// console.log(v)

// const obj1 = {a:2}
// const obj2 = {}

// console.log(Number(obj1))

// let date1 = new Date()
// let date2 = new Date(2020,7,2)

// console.log(date1 - date2) //57945994420
// console.log(31593088356/1000/60/60/24)



function sum(a) {

  let currentSum = a;
  function f(b) {
    currentSum += b;
    return f;
  }

  f[Symbol.toPrimitive] = function() { 
    return currentSum;
  };

  return f;
}
let ss = sum(5)
console.log(""+ss)
// console.log( sum(1)); // 3
// console.log( sum(5)(-1)(2) ); // 6
// console.log( sum(6)(-1)(-2)(-3) ); // 0
// console.log( sum(0)(1)(2)(3)(4)(5) ); // 15

// let obj = {a:1}
// const proto = Object.getOwnPropertyDescriptor(obj,"a")
// console.log(proto)

// console.log('𝒳😄'.length)
// let a




