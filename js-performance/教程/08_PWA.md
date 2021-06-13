
### PWA基本介绍
  * Progress Web App
    + PWA 是什么？
      ![pwa](./images/pwa.png)
    + PWA 优势
      ![优势](./images/youshi.png)    
### PWA核心技术揭秘
  * web app manifest 应用程序清单 Json文件 只能在https协议中使用
    + PWA 核心技术
      ![技术](./images/tec.png)
    + web app manifest 应用程序清单
      ![manifest](./images/manifest.png)
      ![常见配置](./images/config.png)
   [MDN地址](https://developer.mozilla.org/zh-CN/docs/Web/Manifest)
  * service worker
    ![service worker](./images/service-worker.png)
    ![service worker2](./images/service-worker2.png)
    ![service worker2](./images/web-worker.png)
    ```js
    const worker = new Worker('work.js')
    worker.addEventListener("message",e=>{
      console.log(e.data)
    })
    //work.js
    //注意：web worker是一个独立的进程，不能操作DOM和BOM
    //适合做大量的运算
    let total = 0
    for(let i = 0;i<100000000;i++){
      total+=i
    }
    self.postMessage({total:total})
    ```
    ![service worker introduce](./images/service-worker-intro.png)
    ![service worker 使用步骤](./images/service-worker-use.png)
    ![service worker 生命周期事件](./images/service-worker-life.png)    
  * promise / async / await
  * fetch api
  * Cache storage
    ![cache storage](./images/cache-storage.png)
    ![离线处理](./images/离线处理.png)
  * 常见的缓存策略
    ![缓存策略](./images/缓存策略.png)
    ![避免缓存问题](./images/避免缓存问题.png)
  * notification
    ![notification](./images/notification.png)
  