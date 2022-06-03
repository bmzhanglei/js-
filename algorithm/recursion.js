

// let arr = [
//     {id:"1111",name:"name1111",pid:"1111"},
//     {id:"11",name:"name11",pid:"1"},
//     {id:"1",name:"name1",pid:"0"},
//     {id:"11_1",name:"name11-1",pid:"1"},
//     {id:"22",name:"name22",pid:"2"},
//     {id:"2",name:"name2",pid:"0"},
//     {id:"111",name:"name111",pid:"111"}
// ]

// let obj = {}
// let arrId = arr.forEach(res=>{
//     obj[res.id+'-'+res.pid] = res
// })

// // const keys = Object.keys(obj)

// function getTreeRes(keys,pid,res=[]){
 
//     for(let el of pid){
//         let pKeys = keys.filter((res,index)=>{
//               if(res.includes('-'+el)){
//                   keys.splice(index,1)
//                   return true
//               }
//         })
//         if(res.length){
//             res.forEach(item=>{
//                 if(item.id === el){
//                     item.children = pKeys.map(el=>obj[el])
//                 }
//             })            
//         }else{
//             res = pKeys.map(el=>obj[el]);           
//         }
//     }

    
//     return res
// }

// getTreeRes(obj,["0"],[])
// // console.log(keys)
// // console.log(Object.keys(obj).includes('-'+0))
// // console.log(Object.values(obj))

// function tree(keys=Object.keys(obj),pid=["0"],treeRes=[]){
//     if(keys.length === 0) return treeRes
//     return tree(keys,pid,treeRes = getTreeRes(obj,pid,treeRes))
// }
