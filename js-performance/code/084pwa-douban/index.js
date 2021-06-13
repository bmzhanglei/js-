
async function  renderMovie() {
    
}

async function  registerSW() {
    window.addEventListener('load',()=>{
        if('serviceWorker' in navigator){
            try{
                const registration = await navigator.serviceWorker.register("./sw.js")
                console.log("注册成功",registration)
             }catch(err){
                 console.log("注册失败")
            } 
        } 
    })
}

if(Notification.permission === 'default'){
    Notification.requestPermission()
}

//offline:断网
if(!navigator.onLine){
    new Notification('提示',{body:"无网络，你访问的是缓存！"})
}
window.addEventListener("online",()=>{
    new Notification("提示",{body:"你已经链上网络！"})
})