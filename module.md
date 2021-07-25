

### Js模块化  -> es6_module文件
> CommonJs,AMD,CMD,UMD,ES6
* 命名空间 和 IIEF模式 要注意引入顺序
``` js
//命名空间
var namespace = {}
namespace.add = function(a,b){}
namespace.add(1,2)
//IIEF模式
var utils = (function(){
    var module = {}
    module.minus = function(a,b){
        console.log(a - b)
    }
    return module
})()
utils.minus(2,1)
```

* CommonJs 或叫 CJs 同步的读取服务端，浏览器会处于假死的状态
```js
//utils.js
function add(a,b){
    console.log(a+b)
}
module.exports.add = add
//main.js
var add = require('./utils').add
add(1,2)
```

* AMD (异步模块定义) 等加载完成之后，执行回调函数

```js
//utils.js
define([],function(){
    return {
        add:function(a,b){
            console.log(a+b)
        }
    }
})
//main.js
require(['./utils'],function(utils){
    utils.add(1,2)
})
```

* CMD (Common Module Definition)
```js
//AMD
require(['utils','a','b'],function(utils){
    console.log(1)
    //还没用到 utils a b 等模块，但是AMD 已经初始化了所有模块
    console.log(2)
    utils.add(1,2)
})
//CMD
define(function(require,exports,module){
    console.log(1)
    if(false){
        var utils = require('./utils') //需要时再require,执行就不会加载
        utils.add(1,2)        
    }
})
```

* UMD (Universal Module Definition) 通用模块定义 
```js
//utils.js 文件同上 比如浏览器端和服务端用一套代码
(function(root,factory){
    if(typeof define === "function" && define.amd){
        //AMD
       define(['utils'],factory)
    }else if(typeof exports === "object"){
        //CommonJS
        var utils = require("utils")
        module.exports = factory(utils)
    }else{
        root.result = factory(root.utils)  //挂载全局上
    }
}(this,function(utils){
    utils.add(1,2)
}))
```

* ES6 (ES2015)
```js
export const utils = {
    add:function(a,b){
        console.log(a+b)
    }
}

//main.js文件
import {utils} from './utils'
utils.add(1,2)

/**
 * CommonJS 与ES6的区别
 * CommonJS 模块输出的是一个值的拷贝，ES6模块输出 的是值的引用
 * CommonJS 模块是运行时加载，ES6模块是编译时输出接口-》
 *          因为CommonJS加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成，
 *          而ES6模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成
 * 
 * 
 * 
CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
CommonJS 模块的require()是同步加载模块，ES6 模块的import命令是异步加载，有一个独立的模块依赖的解析阶段。
*/
```

