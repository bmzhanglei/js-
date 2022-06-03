
 ```js
1.toString()   //报错，JS引擎无法确定这里的`.`是什么意思，是点运算符（对象方法）还是浮点数？
1..toString()    //成功，运算结果"1" 解析: 第二个点被视为点运算符，前面的是浮点数。
1.0.toString()   //成功，运算结果"1" 解析: 第二个点被视为点运算符，前面的是浮点数。
1 .toString()    //成功，运算结果"1" 解析: 用空格和后面的.toString()隔开, 把前面的当成运算式处理
1+2.toString() //报错，JS引擎无法确定这里的`.`是什么意思，是点运算符（对象方法）还是浮点数？
1+2 .toString() //成功，运算结果"12" 解析: 用空格和后面的.toString()隔开, 把前面的当成运算式处理
(1+2).toString() //成功，运算结果"3" 解析: 括号内部的先进行算法运算，在进行类型转换
(1)+(2).toString() //运算结果"12" 解析: 括号内部进行类型修改并将数字n转换为字符串“n “，在进行拼接，然后再应用toString方法。
(1)+(2)+0 .toString() //成功，运算结果"30" 解析: 如果有多个`+`号，且不包含中括号与""的情况下，则把最后一个加号之前的进行数学运算(不管他有没有被括号包住)，最后一个加号留作拼接作用。
(1)+(2)+0+(11) .toString() //成功，运算结果"311" 解析: 同上
(1)+(2)+0+12 .toString() //成功，运算结果"312" 解析: 同上
([1]+[2]+[3])+12 .toString() //成功，运算结果"12312" 解析: 如果里面只有方括号(单个数值的数组)，则+起连接作用
((1)+(2)+[3])+12+43 .toString()//成功，运算结果"331243" 解析: 如果里面包含圆括号，则先要进行运算，再把运算的结果与后面的内容拼接起来。
(1)+(2)+6+2+5+"(15)"+1+0+(1) .toString() //成功，运算结果"16(15)101"解析: 如果字符串包裹的前面有多个加号，则把字符串双引号前面的进行运算(不管他有没有被圆括号包住)，得到的数值拼接上字符串包裹的内容再拼接上之后的内容。

//toString(radix)  进制参数
  var str = null
  str.toString()  //报错
  (undefined).toString()  //报错

  typeof(typeof(a))  //string

  //隐式类型转换  
  var a = '123'
  a++; // *   /  -  %  str -> nunber
  a   //124

  1 > '2'  //false  <  >= <=  str -> nunber

  "a" > "b"  //转ascii 比较  false

 1/NaN  //NaN
 typeof(NaN)  //"number"
  NaN == NaN // false

var a = "true"
console.log(typeof(Number(a))+'-'+ Number(a))  //number-NaN

  2 > 1 >3 //false
  2 > 1 == 1 //true

  undefined == 0 //false
  null == 0 //false
  "" == 0  //true
  null == undefined // true

  typeof(+'123') //number
  typeof(+'abc') //NaN

 //isNaN  所有先要number的转换
  isNaN(123) //false
  isNaN("a") //true
  Number(null)  //0
  isNaN(null) //false
  Number(undefined) //NaN
  isNaN(undefined) // true

  typeof(d) && (-true) + (+undefined) + ""   //true

   !!" " + !!"" - !!false || "未通过"  // 1
  //数列
  var n = parsInt(window.prompt("请输入第几位：")) 
  var n1 = 1,
      n2 = 1,
      n3;
    for(var i=2;i<n;i++){
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
    console.log(n3)

   //高内聚，低耦合  -> 模块的单一责任制
   //解耦合  函数
   function test(){
      var a = b = 1;  //b是挂在全局变量上的
   }
   b  //1

   //表达式 字面量 test1在函数内部是可见的
   var test = function test1(){
       var a = 1,b = 2;
       test1()
   }

   test.name // test1
   test1() //报错
   test()

    //
   function test(a,b){
       a = 3;
       b = 11
       arguments[0] //3 能更改实参的值的 
       arguments[1]  // undefined
   }
   test(1)

   //预编译
   /*
     1. 通篇检查语法错误
     1.5 预编译的过程
     2. 解释一行执行一行
     函数声明整体提升，变量只有声明提升，赋值不提升
   */

  //暗示全局变量
  var  a = 1;
  b = 2;  // 全局 挂在window

  window = {a:1,b:2}

  //AO activation object 活跃对象，函数上下文
  /* 1.寻找形参和变量声明
     2.实参值赋给形参
     3.找函数声明，赋值
     4.执行
     AO={
        a:undefined -> 2 -> f a(){} -> 1,
        b:undefined -> f (){}
     }
  */
 function test(a){
    console.log(a)  //f a(){}
    var a = 1;
    console.log(a)   //1
    function a(){}
    console.log(a)   //1
    var b = function(){}
    console.log(b)   //f (){}
 }
 test(2)

//
 a = 1
 function test1(){
    console.log(a)  //undefined
    a = 2
    console.log(a)   //2
    var a = 3
    console.log(a)   //3
  }
   
    test1()
    var a;
    /* 
    GO={
       a:undefined -> 1,
       test1:f test1(){}
    }
    AO={
        a:undefined -> 2 -> 3,

    }
    */

   // a = 1
// function test(e){
//    function e(){}
//    arguments[0] =2
//    console.log(e)
//    if(a){
//        var b = 3
//    }
//    var c;
//    a = 4
//    var a
//    console.log(b)
//    f= 5
//    console.log(c)
//    console.log(a)
// }
// var a;
// test(1)  
    console.log(a)  //1
    console.log(f)  //5

    GO={
        a:undefined -> 1,
        test:f test(){},
        f:5
    }
    AO={
        e:undefined
            1
            f e(){}
            2,
        b:undefined,
        c:undefined,
        a:undefined -> 4
    }

// function test(){
//     a =1
//     function a(){}
//     var a = 2
//     return a
// }

// function test(){
//   return a            //f a(){}
//   a = 1
//   function a(){}
//   var a = 2
// }

//AO GO 作用域
//作用域链相关所产生的一切问题
//一个函数的执行，会导致另一个函数的定义，就会形成闭包
//当内部函数被返回到外部并保存时，一定会产生闭包，闭包会产生原来到作用域链不释放，过渡到闭包可能会导致内存泄露，或加载过慢
function sunSched(){
    var sunSched = ""
    var operation={
        setSched : function(thing){
            sunSched = thing
            console.log(this)
            return this
        },
        showSched:function(){
            console.log("---"+ sunSched)
            return this
        }
    }
    return operation
}

var sunSched = sunSched()
sunSched.setSched("ccc").showSched().showSched()

//自动执行，执行完成以后立即释放
//立即执行函数 - 初始化函数
//IIFE - Immediately-invoked function
(function(){})();
var num = (function test(x,y){
   return x + y
}(a,b)); //w3c 建议

//报语法错误
// function(){
//     console.log(1) 
// }(1)   //()里面传值会当成表达式，不会报错 但也不会执行
+ function(){  //+ -  !  2&&  0|| 加符号变成表达式
    console.log(1) 
}() 
//一定是表达式才能被执行符号执行 用()的都是表达式
var test = function(){
    console.log(1)  //1
}();
console.log(test)   //undefined 

console.log((6,5)) // 5 返回,号最后一个

//面试题  变成立即执行 会打印1-9
function test(){
    var arr=[];
    // for(var i=0;i<10;i++){
    //     arr[i]=function(){
    //         document.write(i+'--')
    //     }
    // }

    //分析
    // var i=0
    // for(;i<10;){
    //     arr[i]=function(){
    //         document.write(i+'--')
    //     }
    //     i++；
    // }

    // for(var i=0;i<10;i++){
    //     arr[i]=function(num){
    //         document.write(num+'--')
    //     }
    // }

    //最常用
    for(var i=0;i<10;i++){
         (function(j){
             arr[j]=function(){
                 document.write(j+'--')
             }
         })(i)
    }   
    return arr
}
var myArr = test()
for(var j=0;j<myArr.length;j++){
    // myArr[j]() //十个 10
    //myArr[j](j) //打印 1-9
    myArr[j]() // 打印 1-9 调用立即执行函数
}

//应用 获取index
var oLi = document.querySelectorAll("li")
for(var i=0;i<oLi.length;i++){
    (function(j){
          oLi[j].onClick=function(){
              console.log(j);   
          }
    })(i)
}

//面试题
var fn = (
    function test1(){
        return 1
    },
    function test2(){
        return "2"
    }
)();
console.log(typeof(fn))  //string

//面试题
var a = 10;
if(function b(){}){  //(function b(){}) 表达式 忽略名字了
   a += typeof(b);
}
console.log(a)  // 10undefined

//obj.name = "lisi"
//对象字面量，对象直接赋值

//构造函数
//系统自带的构造函数
var obj = new Object() //对象字面量相等
obj.name = "章三"

//自定义构造函数 大驼峰
function Car(color){
    var me = {}
    me.color = color
    return me
}
var car = Car("red")

/*
    GO = {
       Teacher:(function),
       teacher:{
           name:"dd"
       }
    }

    AO = {
      this:{}
    }
*/
function Teacher(opt){
    /*
      this={
          name:opt.name
      }
    */
    this.name = opt.name;
    this.say = function(){}

    //return this //隐式返回
    //如果返回值是引用类型会起作用
    return function(){

    }
}
var teacher = new Teacher({name:"dd"}) // new 改变this指向  window -> 实例化对象

//包装类  new String | new Number | new Boolean
//原始值没有自己的方法和属性
var a = 1
a.len = 3
//new Number(1).len = 3; 没地方保存，保存不了就 delete
a.len  // undefined

var aa = new Number(a)  //包装成类，设置属性和方法
aa.len = 1
aa.add = function(){

} 

new String(str).length  //包装之后调用length

//数组截断方法
var arr = [1,2,3,4,5]
arr.length = 3
arr // [1,2,3]

var str = 'abc'
str.length = 1 //new String(str).length -> delete
//new String(str).length
str.length  // 3

//面试题
var name = 'langdddss'
name += 10
var type = typeof(name)  //'string'
// var type = new String(typeof(name))  //'string'
if(type.length === 6){
    type.text = 'string'
}
type.text //undefined

//面试题
function Test(){
    var d = 1;
    function f(){
        d++
        console.log(d)
    }
    this.g = f
    //return this; -> 闭包
}
var test = new Test()
test.g() //2
test.g() //3
var test2 = new Test()
test2.g() //2

//面试题
var x = 1,
    y = z = 0;
function add(n){
    return n=n+1
}
y = add(x)
function add(n){
    return n=n+3
}
z = add(x)
x,y,z  //1,4,4

//ASCII码 表1  0-127  表2  126  255 1个字节 byte
// UNICODE码 涵盖 ASCII码 2个字节  >= 256

// constructor -> 构造函数本身
function Car(){
    var this = {   
        name:"Mazd",      //有就访问这里的name       
        __proto__:Car.prototype
    }
}
//Car.prototype.construtor 指向函数本身，constructor 也是可以修改的
Car.prototype.name = "Benz"; 
var car = new Car()  //走到这一步，__proto__原型属于每一个实例化对象 而不是构造函数
// Car.prototype.name = "Mazda"; 
// console.log(car.name)   //Mazda
Car.prototype = {name:"Mazda"}  //new 之后 整个prototype都变了
console.log(car.name)   //Benz

//
function test(){
    var a=1
    function add(){
        a++
        console.log(a)
        //return undefined  //默认返回
    }
    window.add = add
}
test();
add();  //2
add();  //3
add();  //4

//
(function(){
    var a = 1
     function add(){
        a++
        console.log(a)
    }
    window.add = add
})()
add();  //2
add();  //3
add();  //4

//报错
// (function(){})()
// (function(){})()

//防止变量污染 插件化开发
;(function(){
    function Compute(opt){
        this.x = opt.firstNum || 0;
        this.y = opt.secondNum || 0;
    }
    Compute.prototype={
        plus:function(){},
        minus:function(){},
        mul:function(){},
        div:function(){},
    }
    window.Compute = Compute;
})();
var compute = new Compute({firstNum:1,secondNum:2})


//原型链：沿着__proto__向上寻找相应的属性值的链条 -> Object.prototype 顶端
Professor.prototype.tSkill = "JAVA"
function Professor(){
    this.a = 'aaa'
}
var professor = new Professor()

Teacher.prototype = professor
function Teacher(){
    this.mSkill = "JS/JQ";
    this.students = 200
    this.success = {
        alibaba:"28",
        tencent:"30"
    }
}
var teacher = new Teacher()

Student.prototype = teacher
function Student(){
    // this.success = {
    //    baidu:"100",
    //    alibaba:"700"
    // }
     this.pSkill = "HTML/CSS";
}
var student = new Student()
delete student.a
student.students ++;
student.success.baidu = "100"
student.success.alibaba = "700"  //可以改，不建议
console.log(student.a)  //aaa  只能 delete professor.a
// student.students = student.students + 1;
console.log(student.students,teacher.students) //201, 200

//面试题
function Car(){
    this.brand = "Benz"
}
Car.prototype = {
    brand: "Mazda",
    intro:function{
        console.log("我是"+this.brand)
    }
}
var car = new Car()   
car.intro() //我是Benz
Car.prototype.intro() //我是Mazda

//两个是一样的
var obj1 = {}
var obj2 = new Object()  //公司不用这种

//Object.create(object|null) //创建对象 或继承
var test = {num:2}
function Obj(){}
Obj.prototype.num=1
// var obj1 = Object.create(Obj.prototype);
var obj1 = Object.create(test);
//实例化obj2
//调用构造函数Obj的初始化属性和方法
//指定实例对象的原型
var obj2 = new Obj()
obj1
obj2

//创建obj1空对象 不是所有的对象都继承与Object.prototype
var obj1 = Object.create(null)
obj1.num = 1
var obj2 = Object.create(obj1)
obj2.num  //1

//原型方法的重写
Number.prototype.toString.call(1)  //"1"
Object.prototype.toString.call(1)  //"[object Number]"

/*  this
    1.默认绑定规则
    2.隐式绑定：谁调用指向谁
    3.显示绑定 call apply bind
    4.new 优先级最高
*/
// call/apply 更改this的指向
function test(){}
test.call()  //系统隐式加 call() 方法

function Car(brand,color){
    this.brand = brand
    this.color = color
    // newCar.brand = brand
    // newCar.color = color
    this.run = function(){
        console.log("running"+this.brand)
    }
}
Car.prototype.runs = function(){}   
var newCar = {
    displacement:"3.0"
}
// Car.call(newCar,'Benz','red')
Car.apply(newCar,['Benz','red'])  //arguments
newCar  // 没有 Car.prototype.runs 方法

//用法
function Compute(a,b){
    this.plus = function(a,b){
        console.log(a+b)
    }
}
function FullCompute(a,b){
    Compute.apply(this)
    this.minus = function(a,b){
        console.log(a-b)
    }
}

var compute = new FullCompute()
compute.plus(1,2)  //3
compute.minus(1,2) //-1

//继承
function Teacher(){
    this.tSkill = "JAVA";
    this.name = "ccc"   
}
Teacher.prototype = {
    mSkill : "JS/JQ"
}

// Student.prototype = JSON.parse(JSON.stringify(Teacher.prototype)) 
// Student.prototype =Teacher.prototype
// Student.prototype.age = 99
function Student(){
    Teacher.apply(this)
    this.name = "sssss"
}
//圣杯模式
function Buffer(){}
Buffer.prototype = Teacher.prototype
var buffer = new Buffer()
Student.prototype = buffer
Student.prototype.age = 99

var t = new Teacher()
console.log(t)
var s = new Student()
console.log(s)

//最终方案
var inherit = (function(){
    var Buffer = function (){}
    return function(Target,Origin){
        Buffer.prototype = Origin.prototype
        Target.prototype = new Buffer()
        Target.prototype.constructor = Target  //还原构造器
        Target.prototype.super_class = Origin  //继承源
    }
})();
function Teacher(){}
function Student(){}
inherit(Student,Teacher);
var t = new Teacher()
var s = new Student()
console.log(t)
console.log(s)

//hasOwnProperty  排除原型的
var car = {brand:'Benz',color:'red'}
//car[displacement]
console.log('displacement' in car)

//instanceof A对象的原型里到底有没有B的原型
var a = []
a.constructor  //f Array(){}
a instanceof Array  //true
Array.isArray([])

var str = Object.prototype.toString //可先缓存 常用
str.call([])  //[object Array]

//callee/caller 严格模式会报错
function test(a,b,c){
    arguments.callee //返回函数本身
    arguments.callee.length  //3
    test.length //3
    arguments.length  //2
}
test(1,2)

//递归
var sum = (function(n){
    if(n <= 1){
        return 1;
    }
    return n + arguments.callee(n - 1);
})(100)

//caller 返回当前被调用函数的函数引用
test1()
function test1(){test2()}
function test2(){console.log(test2.caller)}

//JS的typeof 可能返回哪些值
object(null)/boolean/string/number/function/undefined/symbol/bigint

//isNaN 实现
function isNaN1(num){
    var res = Number(num) + ''；
    if(res == "NaN"){
        return true
    }else{
        return false
    }
}

//{} == {}  //false
var obj = {}
var obj1 = obj
obj1 === obj  //true

//面试
var a = 1
function test(){
    var a = 2
    this.a = 3
    console.log(a)
}
test()  //2
new test();  //2
console.log(a) //3

var a = 5
function test(){
    a=0
    console.log(a)
    console.log(this.a)
    var a
    console.log(a)
}
//0 5 0 | 0 undefined 0

//三目运算符/三元运算符  自带 return 

var arr = [,1,,2,] //稀松数组  length = 4
var arr1 = new Array(1,2,,3)  //有空值会报错
var arr2 = new Array('a')  // ['a']
var arr3 = new Array(3)  // [,,,] //三个空元素 empty*3

//push unshift  //返回值 执行了方法以后数组长度，来自于 Array.prototype上的方法
Array.prototype.myPush = function(){
    for(var i=0;i<arguments.length;i++){
        this[this.length]=arguments[i]
    }
    return this.length
}

Array.prototype.myUnshift = function(){
    // return Array.prototype.slice.call(arguments).concat(this)

    var pos = 0;
    for(var i=0;i<arguments.length;i++){
        this.splice(pos,0,arguments[i])
        pos ++;
    }
    return this.length
}
//pop shift reverse
//splice 
//concat([],[]) //拼接多个数组
//toString()
//slice(startIndex,endIndex(不包含)) -1 代表最后一位
//join/  split('',length) //截取的长度
var arr = ['a','b','c']
arr.splice(1,1,1,2,3)
arr //['a',1,2,3,'c']
// arr.splice(2,0,'d') //['a','b','c','d']
// arr.splice(-1,0,'d') //['a','b','d','c']

function splice(arr,index){
    return index += index > 0 ? 0 : arr.length ; //获取索引
}

//sort -> 按照ascii排序， 返回排序之后的数组结果
//参数 a,b  冒泡排序法
//返回值 1.负值，a排在前面
//      2.正值，b排在前面
//      3.0 保持不动
arr.sort((a,b)=>a-b)   //升序
arr.sort(function(a,b){ //升序
    if(a>b){
        return 1 
    }else{
        return -1
    }
})

//随机排序
var arr = [1,2,3,4,5,6]
arr.sort((a,b) => Math.random() - 0.5 > 0 ? 1 : -1)

//类数组  如 arguments 的 __proto__是 Object
function test(){
    console.log(arguments)
}
test(1,2,3)

var obj = {  //可继承Array.prototype上的方法
    '0':1,
    '1':2,
    '2':3,
    'length':3,
    'splice':Array.prototype.splice,
    'push':Array.prototype.push
}
// Object.prototype.push = Array.prototype.push
// Object.prototype.splice = Array.prototype.splice
obj.push(4)

//面试题
var obj = {
    '2':3,
    "3":4,
    'length':2,
    'push':Array.prototype.push,
    'splice':Array.prototype.splice
}
obj.push(1)
obj.push(2)
console.log(obj)

//
function test(day){
  var weekday = [,'Mon','Tue',"Wed",'Thu','Fri','Sat','Sun']  //利用数组特性
  return weekday[day] !== undefined ? weekday[day] : "I don't know";
}

//json 对象里是不能有方法的
//可自定义六种 error
var error = new Error("报错了！")
var error = new TypeError("报错了！")
try{
    console.log(a)
}catch(e){
    throw(e)
}finally{
    console.log("finnal")
}

// with  改变作用域和作用域链 性能不好
'use strict'
var a = b = 1  //严格模式下报错
function test(){
    this    //严格模式下 undefined
}
test.call(1)  //严格模式下 1,非严格模式 包装成 Number 类

function test2(a,a){
    console.log(a)
}
test2(1,2)  //2 严格模式下报错 函数的参数不能重复
var obj = {a:1,a:2}
console.log(obj.a)  //2

eval()  //是有自己的作用域的

//标记清除  只要不是全局变量和AO里面的变量 ，其他带标记的变量会自动清除
 ``` 