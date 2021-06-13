

//主要就是缓存内容
const CACHE_NAME = 'cache_v2'
const URLS = ['index.js','/api/getMovie']
self.addEventListener("install",async event=>{
    //开启一个cache ,得到了一个cache对象
    const cache = await caches.open(CACHE_NAME)
    //cache对象旧可以存储的资源
    //等待cache吧所有资源存储起来
    await cache.addAll(URLS)
    await self.skipWaiting()  
})

//主要清除旧的缓存
self.addEventListener("activate",async event=>{
  //清除掉旧的资源
  const keys = await caches.keys()
  keys.forEach(key => {
      if(key !== CACHE_NAME){
          cache.delete(key)
      }
  })
  await self.clients.claim()
})

//fetch事件会在请求发送的时候触发
//判断资源是否能够请求成功，如果能够请求成功，就响应成功的结果
//如果断网，请求失败了，读取cache缓存
self.addEventListener("fetch",async event=>{
   const req = event.request
   const url = new URL(req.url)
   //只缓存同源内容
   if(url.origin !== self.origin){
       return
   }
   const getWith = req.url.includes("/api") ? "networkFirst":"cacheFirst"
    event.respondWith([getWith](req))
})
//网络请求要优先
async function  networkFirst(req) {
    const cache = await caches.open(CACHE_NAME)
    try{
        //先从网络中读取最新的资源
       const fresh = await fetch(req)
       //网络优先，获取到到数据，应该再次更新到缓存
       //吧响应到备份存储到缓存中
       cache.put(req,fresh.clone())
       return fresh
    }catch{
        //从缓存中读取     
        const cached = await cache.match(req)
        return cached
    }
}
async function  cacheFirst(req) {
    const cache = await caches.open(CACHE_NAME)
    const cached = await cache.match(req)
    if(cached){
        return cached
    }else{
        const fresh = await fetch(req)
        return fresh
    }
}