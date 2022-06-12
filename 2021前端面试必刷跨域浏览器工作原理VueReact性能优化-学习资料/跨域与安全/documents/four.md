# 浏览器多页签通讯实现

1. 可以借助 浏览器localstorage方式实现  cookie + setInterval 实现   websocket全双工实现   sharedworker实现
2. 
    1） localstorage 如何实现
        localstorage.setItem 方法传数据
        监听window上 storage事件 就可以获得数据
    ```js
       window.addEventListener('storage',(val)=>{
         console.log(val)
     })
     var orignalSetItem = localStorage.setItem;
     localStorage.setItem = function(key,newValue){
         var setItemEvent = new Event("setItemEvent");
         setItemEvent.key = key;
         setItemEvent.newValue = newValue;
         setItemEvent.oldValue = localStorage.getItem(key);
         window.dispatchEvent(setItemEvent);
         orignalSetItem.apply(this,arguments);
     }
     window.addEventListener("setItemEvent", function (e) {
         console.log(e.key , e.newValue , e.oldValue )
     });
    ```
    2) cookie + setInterval
        document.cookie 发数据
        setInterval不停地去cookie上去数据
    3) websocket实现 
        websocket是全双工通讯方式  多页签可以将服务器作为桥梁来实现通讯
    4）h5 新技术 共享worker  sharedworker  也可以实现
```js
 //worker.js
 var clients = [];
onconnect = function(e) {
  var port = e.ports[0];
  clients.push(port);
  port.addEventListener("message", function(e) {
    for (var i = 0; i < clients.length; i++) {
      var eElement = clients[i];
      eElement.postMessage(e.data);
    }
  });
  port.start();
};

//sworker.js
export let worker = new SharedWorker('./worker.js')

//test1.html
import {worker} from './sworker.js'
worker.port.postMessage('发送信息给worker' + Math.random())
worker.port.onmessage = function(e){
    console.log(e.data)
}
```



