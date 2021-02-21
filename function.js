
const log =console.log.bind(console)
// 1.call和apply 的区别是什么，哪一个性能更好一些
//   都是用来改变  this 指针指向
//   fn.call(obj,10,2,3);   参数超过三个，call 的性能要比 apply 好些
//   fn.apply(obj,[1,3,3]);
//   fn.bind(obj, args)  函数不会立即执行

// let arr = [1,3,4]
//     obj={}
//     function fn(x,y,z){}

//     fn.call(obj,...arr)
//     fn.call(obj,arr);//x=[1,3,4]  y=z=undefined
//     fn.apply(obj,arr)

// Js constructor
//1.什么是constructor
//一种用于创建或初始化class ,对象的特殊方法
/*
  生成对象 基于构造函数和原型 
  1、constructor 函数模版 创建对象
  2、constructor 属性 告诉 实例 你的爸爸是谁 谁创造了你

  函数是一等公民
*/ 

function App(name){
    this.name = name
}

// App.prototype.getName = function(){
//     return this.name;
// }
App.prototype = {  //把 App 的原型重写了
//    constructor:App
}

log(App.prototype.constructor==App)

var app = new App('xxx')

app.constructor.prototype.getAge=function(){
    log('--->',this)
}

app.getAge()

log(app.constructor==App) //true  指向谁

log(app.hasOwnProperty('constructor')) //false

// log('constructor' in app)  //true
// log(app.__proto__.hasOwnProperty('constructor'))  //true
// log(App.hasOwnProperty('constructor'))  //false
// log(App.prototype.hasOwnProperty('constructor'))  //true 在原型上面


function currying(fn,m){
    return function(n){
        return fn.call(this,n,m)
    }
}

function tailFactorial(n,total){
    if(n<=1) return total
    return tailFactorial(n-1,n*total)
}

let factorial = currying(tailFactorial,1)

// console.log(factorial(5)) 


// 1 1 2 3 5 8 13
function Fibonacci(n,a1=1,a2=1){
    if(n<=1) return a2;
    return Fibonacci(n-1,a2,a1+a2)
}

//
function  Foo() {
    Foo.a = function() {
        console.log(1)
    }
    this.a = function () {
        console.log(2)
    }    
}
//吧Foo当做类，在原型上设置实例共有当属性方法 => 实例.a();
Foo.prototype.a = function () {
    console.log(3)
}
//吧Foo当作普通对象设置私有的属性方法 => Foo.a()
Foo.a = function() {
    console.log(4)
}

Foo.a()
let obj = new Foo() //obj可以取原型上的方法 Foo.a:f=>1  obj.a:f=>2
obj.a() //私有属性 中的a
Foo.a() 


//判断元素是否再可视区域
function isElementInViewport(el) {
    //获取元素是否在可视区域
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
}

//编写一条正则，用来验证此规则：一个6-16位的字符串，必须同时包括大小写字母和数字
// (?=pattern) 正向预查  (?!pattern) 负向预查 必须不满足条件
let reg = /(?!^[a-zA-Z]+$)(?!^[a-z0-9]+$)(?!^[A-Z0-9]+$)(?!^[0-9]+$)^[a-zA-Z0-9]{3,16}$/g;
// console.log(reg.test('213ssDdsd'));

// 1-10位：数字、字母、下划线组成字符串，必须有 _ 
let reg2 = /(?!^[a-zA-Z0-9]+$)^\w{1,10}$/;
// console.log(reg2.test('213ssDdsd'));

//字符中包含 ‘\w’ ,但是必须包含 _ 
let reg3 = /(?=_)\w+/;
console.log(reg3.test('213ssD_dsd'));

