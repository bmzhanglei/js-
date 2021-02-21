/**
 * this -> js 关键字
 * 当前环境执行期上下文对象的一个属性
 * this在不同的环境、不同作用域下，表现不同
 */

//全局作用域下的 this -> 全局对象
// window 和 this 的关系
/**
 * 获取全局对象
 * web: window, self, frames, this
 * node: global
 * worker: self
 * 通用：globalThis
*/

// function test(){
//     'use strict';
//     return this;   //undefined
// }
// console.log(window.test())  //返回 window
// console.log(test())  //返回 window

/**
 * 类的本质就是函数
 */
// 类 class xxx -> 容器/作用域/模块 -> 壳子
// class Test1{
//     constructor(){}
//     say(){}
//     static do(){}  
// }

//函数
// function Test2(){  //constructor

// }
// Test2.prototype.say=function(){}
// Test2.do = function(){}

//立即执行函数
// const Test = (function(){
//     function Test2(){  //constructor
//       return "test2"
//     }
//     Test2.prototype.say=function(){}
//     Test2.do = function(){}
// })()
// window.Test = Test

// class Test{
//     constructor(){
//         //类的非静态方法 -> new -> this -> {}
//         this.test = function(){
//             console.log("none-staric",this)
//         }
//     }
//     //类的静态方法 -> Test.prototype{...}
//     //new this -> {} -> .__proto__ ->Test.prototype
//     //Test -> prototype{} -> test
//     test(){
//         console.log("static:",this)
//     }
// }

// let t= new Test()
// t.test()

//继承  沿着 __proto__ -> __proto__ 向上找
class Father{
    constructor(age){
        this.age = age
    }
    swim(){
        console.log("swim")
    }
}

class Son extends Father{
    constructor(){
        //调用Father上的constructor
        //生成this 绑定 -> Father this -> Son的实例
        // this -> new Father() -> {age}
        super(44) //super 之前不能调用this
        this.hobby = "hobby"
    }
    study(){
        console.log(this)
        this.swim()
    }
}

// bind 只生效一次
var a = "window_a"
// function test(b,c){
//     console.log(this.a,b,c)
// }
// var obj = {a:"obj_a"}
// var obj2 = {a:"obj2_a"}
// let t2 = test.bind(obj,1,2).bind(obj2,11,22)
// t2()  //只生效 test.bind(obj,1,2)

//箭头函数是忽略任何形式的this指向的改变
//静态this指向 外层非箭头函数的作用域的this指向
//对象方法内部的this -> 最近的引用
// 'use strict'
// const test = ()=>{
//     console.log(this) //window
// }
// let obj = {
//     a:1,
//     test:()=>{
//         //箭头函数中的this不是谁绑定指向谁
//         console.log(this) //window
//     },
//     test2:test2,//obj
//     test3:test,
//     test4:function(){
//         //this -> window
//         //最近的引用就是window 孤立的函数
//         function t(){
//             console.log(this) //window
//         }
//         t()
//     }
// }
// function test2(){
//     console.log(this.a) 
// }

// obj.test3()

// obj3 -> __proto__ -> Object.prototype
/**
 * 1.test4由obj3调用
 * 2.obj3 就是test4最近的引用
 * 3.test4 this -> obj3
 * 4.obj3 = {test4 ✖️}
 * 5.obj3 -> __proto__ -> prototype
 * 6.一直找到 Object.prototype为止
 * 7.只有链上有test4 直接调用
 * 8.如果找不到报错 -> undefined
 * 9.undefined 无法执行 -> not a function
 *                        TypeError
 */
// var obj3 = Object.create({
//     test4:function(){
//         console.log(this) //obj3
//         console.log(this.a + this.b)
//     }
// })
// // obj3.__proto__.a = 1;
// Object.prototype.a = 2
// obj3.b = 12;

// obj3.test4() //13

// let obj4 = {}
// Object.defineProperty(obj4,"a",{
//     get(){
//         console.log(this)
//         return 4
//     }   
// })

// obj4.a


// function Test(){
//     /**
//      * new 的过程
//      * this -> {}
//      * {a:1,b:2}
//      * return this //隐式返回
//      */
//     this.a = 1
//     this.b = 2
//     console.log(this)
//     return {
//         c:3,
//         d:4
//     }
// }
// /**
//  * 1.
//  */
// //this -> 实例化出来的对象
// var test = new Test()
// console.log(test.a) //undefined
// console.log(test)  //{c:3,d:4}
// var test2 = Test()
// console.log(test2)  //{c:3,d:4}

// var oBtn = document.querySelector("#btn")
// //onclick 事件处理函数内部的this总是指向倍绑定的DOM元素
// oBtn.onclick=function(){
//     console.log(this); //
// }
// oBtn.addEventListener("click",function(){
//     console.log(this); //
// },false)

// ;(function(doc){
//     var oBtn = doc.querySelector("#btn")
//     function Plus(a,b){       
//         this.a = a
//         this.b = b
//         this.init()
//     }
//     Plus.prototype.init = function(){
//         this.bindEvent()
//     }
//     Plus.prototype.bindEvent = function(){ 
//         const self = this      
//         // oBtn.addEventListener("click",this.handlBtnClick.bind(this),false)
//         oBtn.addEventListener("click",function(e){
//             self.handlBtnClick(e)
//         },false)
//     }
//     Plus.prototype.handlBtnClick = function(e){
//         // console.log(this)
//         // e.currentTarget.click()
//         // console.log(e.currentTarget)
//         console.log(this.a+this.b)
//     }
//     window.Plus = Plus
// })(document)

// new Plus(1,3)

class Father1{
    constructor(){
        //是让函数内的this指向固定
        this.eat = this.eat.bind(this)
    }
    get fruit(){
       return "apple"
    }
    eat(){
        console.log("I'm eat an "+this.fruit)
    }
}
class Son1{
    get fruit(){
        return "orange"
    }
}
let son = new Son1()
let father = new Father1()
son.eat = father.eat //son 中的this指向father的实例
console.log(son)
son.eat()