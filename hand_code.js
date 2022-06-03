
//Ajax
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

// function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
//   if( n <= 1 ) {return ac2};
//   return Fibonacci2.bind(null,n - 1, ac2, ac1 + ac2);
// }

// new的实现
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

// var a = objFactory(Person,"xxx")
// console.log(a.name)
// console.log(a.getName())
// console.log(Object.getPrototypeOf(a)===Person.prototype)

// bind 的实现
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

// 柯里化函数
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

// 反柯里化函数
// Function.prototype.uncurrying = function () {
//     var _this = this;
//     return function () {
//         return _this.apply(arguments[0], [].slice.call(arguments, 1))
//     }
// };
// var array_unshift = Array.prototype.unshift.uncurrying();
// array_unshift(arguments, arg)



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