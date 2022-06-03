## 设计模式<i id="top"></i>
+ 创建型
  - [**工厂模式](#Factory)
  - [**单例模式](#Singleton)
  - [原型模式](#Prototype)
  - [构造器模式](#Constructor)  
  - [抽象模式](#Abstract)  
  - [生成器模式](#Build)
+ 结构型
  - [适配器模式](#Adapter)
  - [**代理模式(加载的时候，比如预加载)](#Proxy)
  - [*装饰模式](#Dectorator)
  - [外观模式](#Facade)
  - [享元模式](#Flyweight)
+ 行为型
  - [**策略模式（算法封装，重复调用）](#Strategy)
  - [**职责链模式（对象查找）]
  - [*迭代器模式](#Iterator)
  - [*模版模式]
  - [**观察者模式(发布-订阅模式)](#Observer)
  - [命令模式](#Command)
  - [**中介者](#Mediator)
  - [*状态模式](#state)
  
### <i id="Factory"></i>工厂模式&nbsp;[top](#top)
> 工厂模式中，我们在创建对象时不会对客户端暴露创建逻辑，并且是通过使用一个共同的接口来指向新创建的对象，用工厂方法代替new操作的一种模式。常见例子：弹窗，message,对外提供api,都是调用api,然后新建一个弹框或者Message的实例
```js
class Creator {
    create(name) {
        return new Animal(name)
    }
}

class Animal {
    constructor(name) {
        this.name = name
    }
}

var creator = new Creator()

var duck = creator.create('Duck')
console.log(duck.name) // Duck

var chicken = creator.create('Chicken') 
console.log(chicken.name) // Chicken
```
* 小结:
 1. 构造函数和创建者分离，对new操作进行封装
 2. 符合开放封闭原则
  
### <i id="Singleton"></i>单例模式&nbsp;[top](#top)
> 定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。例如：线程池、全局缓存、window对象、登陆浮框等
```html
 <button id="btn">登录</button>
```
```js
 class Login {
        createLayout() {
            var oDiv = document.createElement('div')
            oDiv.innerHTML = '我是登录框'
            document.body.appendChild(oDiv)
            oDiv.style.display = 'none'
            return oDiv
        }
    }

    class Single {
        getSingle(fn) {
            var result;
            return function() {
                return result || (result = fn.apply(this, arguments))
            }
        }
    }

    var oBtn = document.getElementById('btn')
    var single = new Single()
    var login = new Login()

    // 由于闭包，createLoginLayer对result的引用，所以当single.getSingle函数执行完之后，内存中并不会销毁result。
    // 当第二次以后点击按钮，根据createLoginLayer函数的作用域链中已经包含了result，所以直接返回result
    // 讲获取单例和创建登录框的方法解耦，符合开放封闭原则
    var createLoginLayer = single.getSingle(login.createLayout)
    oBtn.onclick = function() {
        var layout = createLoginLayer()
        layout.style.display = 'block'
    }
```
* 小结:
1. 单例模式的主要思想就是，实例如果已经创建，则直接返回
```js
function creatSingleton() {
    var obj = null
    // 实例如已经创建过，直接返回
    if (!obj) {
        obj = xxx
    }
    return obj
}
```
2. 符合开放封闭原则