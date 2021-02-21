```js
//ES6

var arr = []
for(var i=0;i<10;i++){
    arr[i] = function(){
        console.log(i)
    }
}
for(var i=0;i<10;i++){
    arr[i]()  //0-9
}
//1.let在同一作用域下不可重复声明
//2.let不存在变量提升，会产生一个暂时性死区 TDZ
//3.let只能在当前作用域下生效
//let 本质就是为了js增加一个块级作用域
//不建议在块级作用域中声明方法，块级作用域没有返回值
//父作用域
for(let i=0;i<10;i++){
//相当于 for(let j=0;j<10;j++){
   //子作用域
   let i = "a"
   console.log(i)   // 10个a
}

//用let
var arr = []
for(let i=0;i<10;i++){
    arr[i] = function(){
        console.log(i)
    }
}
//分析
{
    let i = 0; //给了个块级作用域 缓存 1，2...
    {
        arr[i] = function(){
            console.log(i)
        }
    }
}

for(var j=0;j<10;j++){
    arr[j]()  //0-9
}
//作用域
let a = 1
{
    function a(){}
}
console.log(a) //1

//const 
/*
   一旦定义，必须赋值，具有块级作用域
   不能提升，有暂时性死区
   同一作用域下不可重复声明
   栈 存放原始数据类型
   堆 存放引用类型 指针
*/
var a = 10
{
    const a = 1
 // const a = a  //Uncaught ReferenceError: Cannot access 'a' before initialization at...
    console.log(a)   //1
}
console.log(a)  //10

//
let x = 1
function foo(x = x){ //这里的参数 使用 let 声明的
    console.log(x)   
}
foo()  //报错 Uncaught ReferenceError: Cannot access 'x' before initialization
foo(2)  //2

Object.freeze(obj)  //只能冻结第一层级
//let const class //不会挂到window顶层对象上的

//解构赋值 变量解构，就是变量赋值，变量解构赋值
//不完全解构
let [a=99,[c]] = [,[3,4]]
console.log(a,c)   //1 3  

function test(){console.log(10)}
let [x = test()] = []
console.log(x)  //10 undefined

//
let name = 'zhangsan'
let person = {
    name,
    eat(){console.log(this)}
}

let a;
({a} = {a:1});  //变成表达式
console.log(a)

//模式匹配
let a1 = [1,2], obj2 = {};
[obj2.a, obj2.b] = a1;
console.log(obj2)

//特殊对象
let arr = [1,2,3]
let {0:first,[arr.length-1]:last} = arr
console.log(first,last)

[(b)] = [3]  //3
([b]) = [3]  //模式不对 报错

({a:(b)={}})  //本身并没有匹配
b  //{}

var a = {};
[(a.b)] = [3];
// ([a.b]) = [3];  //用let/var 声明，加() 就报错
console.log(a) //{b:3}

let a = "x" ,b ='y',obj={};
({a:obj[a+b]} = {a:2})
console.log(obj['xy'])   //2

//变量值交换
let a = 10 ,b = 20;
[b, a] = [a, b]
//模式匹配可以匹配同源属性（同一个源属性）
let {a:x,b:y} = {a:1}
x,y  //1 1

//
function foo({x=10}={},{y}={y:10}){
    console.log(x,y)
}
foo()  //10  10 
foo({},{}) //10 undefined
foo({x:1},{y:2}) // 1 2

function foo({x,y}={}){ //赋值空对象，避免报错
    console.log(x,y)
}
foo() 

//解构隐式转换 bool number string 都能进行隐式转换
//undefined  null 不能进行隐式转换
const [a,b,c] = 'hel';  // h e l
let {length:len} = 'hel'  //3

let {toString:s} = 123
console.log(s===Number.prototype.toString) //true

var x = 1
function foo(x,y=function(){x=2;console.log(x)}){
    var x = 3
    y()  //2
    console.log(x)  //3
}
foo()
console.log(x)  //1

// => 箭头函数
//this指向是固化的 =》函数的内部是并没有自己的this,只能通过父级作用域来获取到this,闭包的this
// ...spread / rest 运算符
var sum = (...args)=>{
  console.log(args)
}
sum(1,3)    //收集
sum(...[1,2,3]) //展开原则
sum.apply(null,[1,2,3])  //传数组
((a,b=1,...args)=>{}).length //1

//运用
(function(){
    function Button(){
        this.button = document.getElementById("button")
    }
    Button.prototype = {
        init(){
          this.bindEvent();
        },
        bindEvent(){
           this.button.addEventListener('click',(e)=>this.btnClick(e),false)
        },
        btnClick(e){
           console.log(e)
           console.log(this)
        }
    }
    new Button().init()
})()

//函数
new Function().name //anonymous
(new Function).name //anonymous
function foo(){}
console.log(foo.bind({}).name) //bound foo

module.export.obj={}  
const {a}=require('./root.js')

Object.getOwnPropertyDescriptor(obj,'a')
const obj = {
   _a:[],
   get a(){
    return this._a+"";
   },
   set a(newVal){
      this._a.push(newVal+"a")
   }
}
obj.a = 'UU'
console.log(obj.a)

//数组的扩展方法
 ``` 