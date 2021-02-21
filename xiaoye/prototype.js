
/**
 * 对应名称
 * - prototype: 原型
 * - __proto__: 原型链（链接点）
 * 
 * 从属关系
 * prototype -> 函数的一个属性：对象 {}
 * __proto__ -> 对象Object的一个属性：对象 {}
 * 对象__proto__ 保存着该对象的构造函数的prototype
 * 
 * test {
 *   a:1,
 *   __proto__:Test.prototype = {
 *     b:2,
 *     __proto__:Object.prototype = {
 *       __proto__  // null
 *     }
 *   }
 * }
 */

function Test(b){
    this.b=b
}

const test = new Test()

test.__proto__.a = "aaa"
Object.prototype.c = "ccc"

console.log(Test.prototype.a === test.a) //true
console.log(test.c === Test.prototype.c) //true

console.log(test.__proto__ === Test.prototype) //true

console.log(Test.prototype.__proto__ === Object.prototype) //true

Object.prototype.__proto__ //null 原型链的顶层

//Function Object: 函数  对象
console.log(Test.__proto__ === Function.prototype) //返回函数 f(){}
console.log(Function.__proto__ === Function.prototype) //true

// const obj = {}
// const obj = new Object() //function

console.log(typeof Object) // function
console.log(Object.__proto__ === Function.prototype) //true
console.log(Object.__proto__ === Function.__proto__ ) //true

//test => {a:1,b:2}
console.log(test.hasOwnProperty("b"))
console.log("a" in test)  //找链上的属性c

//test.constructor -> 实例化test对象的构造函数
console.log(test.constructor === Test)
function Test1(){}

test.constructor = Test1 //constructor是可以更改的

