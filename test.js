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

// function Person(name) {
//     this.name = name
//     return undefined
//     // console.log(this)
// }

// Person.prototype.getName = function () {
//     return this.name
// }

// var objFactory = function () {
//     let obj = new Object()
//     let Constructor = [].shift.call(arguments)
//     obj.__proto__ = Constructor.prototype
//     let ret = Constructor.apply(obj, arguments)
//     console.log(Constructor)
//     // console.log(ret)
//     return obj
// }

// var a = new Person("a")

// console.log(a)

// var a = objFactory(Person,"xxx")
// // console.log(a.name)
// // console.log(a.getName())
// // console.log(Object.getPrototypeOf(a)===Person.prototype)

// function t(params){
//     "use strict"
//     console.log(this)
//     // console.log(params)
// }

// // var obj = {a:1}
// t()
// t.call(obj,"ddd")

// Function.prototype.myBind = function(){
//     let self = this
//     let context = [...arguments].shift()
//     let args = [...arguments].slice(1)
//     return function(){        
//         return self.apply(context,[...args,...arguments ]  )
//     }
// }


// let obj = {name:"name"}
// var func = function( a, b, c, d ){ 
//     console.log ( this.name ); // 输出：sven 
//     console.log ( [ a, b, c, d ] ) // 输出：[ 1, 2, 3, 4 ] 
// }.myBind( obj, 1, 2 );

// func(5,6,7)

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

// var currying = function (fn) {
//     var args = [];
//     return function a() {
//         if (arguments.length === 0) {
//             return fn.apply(this, args);
//         } else {
//             [].push.apply(args, arguments);
//             // console.log(arguments.callee)
//             return a;
//         }
//     }
// };
// var cost = (function () {
//     var money = 0;
//     return function () {
//         for (var i = 0, l = arguments.length; i < l; i++) {
//             money += arguments[i];
//         }
//         return money;
//     }
// })();

// var cost = currying(cost);

// console.log(cost(100)(200)(200, 2)())

// Function.prototype.uncurrying = function () {
//     var self = this;
//     return function () {
//         let obj = [...arguments].shift()
//         let rest = [...arguments].slice(1)
//         return self.apply(obj, rest)
//     }
// }
// Function.prototype.uncurrying = function () { 
//     var self = this; 
//     return function() { 
//     var obj = Array.prototype.shift.call( arguments );
//     return self.apply( obj, arguments ); 
// }; 
// };
// var push = .push.uncurrying();

// (function () {
//     push(arguments, 4);
//     console.log([...arguments]); // 输出：[1, 2, 3, 4] 
// })(1, 2, 3);

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

// function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
//   if( n <= 1 ) {return ac2};
//   return Fibonacci2.bind(null,n - 1, ac2, ac1 + ac2);
// }


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

// sum(1, 100000)


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

// const src = '<img src="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"/>'

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

// console.log(date1 - date2)
// console.log(31593088356/1000/60/60/24)

// function  sumTo(num,sum=0) {
//   if(num>0){
//     return sumTo(num-1,sum+num)
//   }
//   return sum  
// }

// console.log(sumTo(10))

// function factorial(num,all=1) {
//    if(num>0){
//      return factorial(num-1,all*num)
//    }else{
//      return all
//    }
// }


// function fib(num,one=1,second=1) {
//    if(num>2){
//      return fib(--num,second,one+second)
//    }
//    return second
// }

// console.log(fib(3))

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

// function send(type) {
//   let url = "http://127.0.0.1:8080/";
//   let xhr = new XMLHttpRequest();
//   xhr.open("post", url, true);
//   var data;
//   if (type === "formdata") {
//       data = new FormData();
//       data.append("key", "value");
//   } else if (type === "json") {
//       xhr.setRequestHeader("Content-Type", "application/json");
//       data = JSON.stringify({"key": "value"});
//   } else if (type === "text") {
//       data = "key=value";
//   } else if (type === "www") {
//       // 这个header 其实是 传统post 表单的格式
//       xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//       data = "key=value";
//   }
//   xhr.send(data);
// }

//promise ajax
// function ajax(url) {
//   return new Promise((resolve, reject) => {
//     //1.创建异步请求对象
//     let xhr = new XMLHttpRequest();
//     // 2.配置 ajax 请求地址
//     xhr.open('get', url, true);
//     // 3.设置响应头
//     // application/x-www-form-urlencoded    表单字符类型
//     // multiline/form-data      表单类型
//     // application/json
//     // text/xml
//     xhr.setRequestHeader(
//       "Content-Type",
//       "application/x-www-form-urlencoded"
//     );    
//     // 4.绑定监听事件
//     //每当readyState改变时，都会调用这个函数。
//     xhr.onreadystatechange = () => {
//       // 当异步请求状态为4时，请求已完成，并且准备就绪
//       if (xhr.readyState == 4) {
//         //如果200，代表请求成功
//         if (xhr.status == 200)
//           resolve(xhr.responseText)
//       }else if(xhr.status == 404) {
//         reject(new Error('404 NOT FOUND'))
//       }    
//     }
//     // 5.发送请求
//     xhr.send(null);
//   })
// }



