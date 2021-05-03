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
// var push = Array.prototype.push.uncurrying();

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

var OffLightState = function (light) {
    this.light = light;
};
OffLightState.prototype.buttonWasPressed = function () {
    console.log('弱光'); // offLightState 对应的行为
    this.light.setState(this.light.weakLightState); // 切换状态到 weakLightState 
};
// WeakLightState：
var WeakLightState = function (light) {
    this.light = light;
};
WeakLightState.prototype.buttonWasPressed = function () {
    console.log('强光'); // weakLightState 对应的行为
    this.light.setState(this.light.strongLightState); // 切换状态到 strongLightState 
};
// StrongLightState：
var StrongLightState = function (light) {
    this.light = light;
};
StrongLightState.prototype.buttonWasPressed = function () {
    console.log('关灯'); // strongLightState 对应的行为
    this.light.setState(this.light.offLightState); // 切换状态到 offLightState 
};

var Light = function () {
    console.log(this)
    this.offLightState = new OffLightState(this);
    this.weakLightState = new WeakLightState(this);
    this.strongLightState = new StrongLightState(this);
    this.button = null;
};

Light.prototype.init = function () {
    var button = document.createElement('button'),
        self = this;
    this.button = document.body.appendChild(button);
    this.button.innerHTML = '开关';
    this.currState = this.offLightState; // 设置当前状态
    this.button.onclick = function () {
        self.currState.buttonWasPressed();
    }
};

Light.prototype.setState = function (newState) {
    this.currState = newState;
};

var light = new Light();
light.init();