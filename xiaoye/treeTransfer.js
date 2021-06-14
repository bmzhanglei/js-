


const arr = [{
    name: "1-",
    id: "1",
    pid: "0"
},
{
    name: "11-",
    id: "11",
    pid: "1"
},
{
    name: "111-",
    id: "111",
    pid: "11"
},
{
    name: "2-",
    id: "2",
    pid: "0"
},
{
    name: "111xx-",
    id: "1110",
    pid: "111"
},
{
    name: "1111-",
    id: "1111",
    pid: "111"
},
{
    name: "11112-",
    id: 1112,
    pid: "1111"
},
{
    name: "22-",
    id: "22",
    pid: "2"
},
{
    name: "22xx",
    id: "222",
    pid: "22"
},
{
    name: "22xxy",
    id: "223",
    pid: "22"
},
]
//关于tree的转化
function formatDataTree(data){
    let parents = data.filter(p=>p.pid === "0")
    let children = data.filter(c=>c.pid !== "0")

    dataToTree(parents,children);
    return parents
    function dataToTree(parents,children) {
        parents.map(p => {
            children.map((c,i)=>{
                if(c.pid === p.id){
                    let _children = JSON.parse(JSON.stringify(children))
                    _children.splice(i,1)
                    if(p.children){
                        p.children.push(c)
                    }else{
                        p.children = [c]
                    }
                    dataToTree([c],_children)
                }
            })
        })
    }
}

const getTree = formatDataTree(arr)
console.log(JSON.stringify(getTree,null,2))

//针对数据量不大的情况
function formatDataTree2(data){
  let _data = JSON.parse(JSON.stringify(data))
  return _data.filter(p=>{
      const _arr = _data.filter(c=>c.pid === p.id)
      _arr.length && (p.children = _arr)
      return p.pid === "0"
  })
}

// console.log(JSON.stringify(formatDataTree2(arr),null,2))



/***********************************************自己的 */
let obj = {}
let pidAll  = []
let getPidChild = {}
arr.forEach(item => {
    obj[item.id ] = item //+ "---" + (item.pid ? item.pid : "0")
    if (obj.pid === "") {
        obj[item.id].pid = "0"
    }
    if(item.pid===""){
        pidAll.push("0")
    }else{
        pidAll.push(item.pid)
    }    
})
pidAll = [...new Set(pidAll)]

function getParentData(ids = [], item) {
    let {
        _,
        pid
    } = item
    const val = obj[pid]
    if (val && pid) {
        ids.unshift(pid)
        getParentData(ids, val)
    }
    return ids
}

//arr 添加 pids
arr.forEach(item => {
    if (item.pid === "") {
        item.pid = "0"
    }
    item.pids = getParentData([], item)
})

//获取所有父的子元素
arr.forEach(item => {
    if(pidAll.includes(item.pid)){
        if(getPidChild[item.pid]){
            getPidChild[item.pid].push(item)
        }else{
            getPidChild[item.pid] = [item]
        } 
    }
})

console.log(JSON.stringify(getPidChild,null,2) )

console.log('----------------')

//objs 添加 pids
for (let i in obj) {
    obj[i].pids = getParentData([], obj[i]) 
}


//第一种方案（效率高）
function arrToTree(pdata=[]){
    pdata.forEach(item=>{     
        const children = getPidChild[item.id]
        if(children && children.length){
            item.children = children
            arrToTree(item.children)
        } 
    })
    return pdata
}

const alldata = arrToTree(getPidChild["0"])

console.log(JSON.stringify(alldata,null,2)) 

//第二种方案
// function arrayToTree(arr, pid) {
//     let temp = [];
//     let treeArr = arr;
//     treeArr.forEach((item, index) => {
//         if (item.pid == pid) {
//             const treedata = arrayToTree(treeArr, treeArr[index].id)
//             if (treedata.length > 0) {
//                 treeArr[index].children = treedata;
//             }
//             temp.push(treeArr[index]);
//         }
//     });
//     return temp;
// }

// console.log(JSON.stringify(arrayToTree(arr, "0"), null, 2));

// function getChild(pids,index){
//     if(pids.length){
//        let one = trees[index].filter(res=>res.id===pids[0]) 

//        return  getChilds(pids,one)
//     //    if(pids[1]){
//     //       const two = one.children.filter(res=>res.id===pids[1])
//     //        if(pids[2]){
//     //           const three = two.children.filter(res=>res.id===pids[2])
//     //        }else{
//     //            return two.children
//     //        }
//     //    }else{
//     //        return one.children
//     //    }

//     }else{
//        return trees[index].children
//     }
// }


// function getChilds(pids,one){
//     let child = one.children
//     for(let i=1;i<pids.length;i++){       
//         if(pids[i]){
//            one = child.filter(res=>res.id===pids[i])
//         }else{
//             return one.children
//         }
//     }
// }