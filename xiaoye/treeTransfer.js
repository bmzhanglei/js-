


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

/********************** 最高效方案 ****************************** */
const data = [
    { id: "18", name: "大大", pid: "17", job: "项目xxx" },
    { id: "01", name: "张大大", pid: "", job: "项目经理" },
    { id: "17", name: "大大", pid: "16", job: "xxxxxx" },
    { id: "02", name: "小亮", pid: "01", job: "产品leader" },
    { id: "03", name: "小美", pid: "01", job: "UIleader" },
    { id: "04", name: "老马", pid: "01", job: "技术leader" },
    { id: "05", name: "老王", pid: "01", job: "测试leader" },
    { id: "06", name: "老李", pid: "01", job: "运维leader" },
    { id: "07", name: "小丽", pid: "02", job: "产品经理" },
    { id: "77", name: "小丽", pid: "07", job: "产品经理" },
    { id: "08", name: "大光", pid: "02", job: "产品经理" },
    { id: "09", name: "小高", pid: "03", job: "UI设计师" },
    { id: "10", name: "小刘", pid: "04", job: "前端工程师" },
    { id: "11", name: "小华", pid: "04", job: "后端工程师" },
    { id: "12", name: "小李", pid: "04", job: "后端工程师" },
    { id: "13", name: "小赵", pid: "05", job: "测试工程师" },
    { id: "14", name: "小强", pid: "05", job: "测试工程师" },
    { id: "15", name: "小涛", pid: "06", job: "运维工程师" },
    { id: "16", name: "大大", pid: "", job: "项目经理2" },
  ];

 
  function arrToTree(data) {
    let tree = [];
    if (!Array.isArray(data)) {
      return tree;
    }
    let map = {};
    data.forEach((item) => {
      map[item.id] = item;
    });
    function getPids(item,ids = []) {
        if (item.pid && map[item.pid]) {
           return getPids(map[item.pid], ids.concat(item.pid));
        }
        return ids.reverse();
    }
    // 通过对象的属性名ID，来找到父节点，将存到map里的对象取出来放到父节点里的children数组中。
    data.forEach((item) => {
      let parent = map[item.pid];
      if (parent) {
        item.pids = getPids(item);
        (parent.children || (parent.children = [])).push(item);
      } else {
        tree.push(item);
      }
    });
    return tree;
  }
  console.log(JSON.stringify(arrToTree(data), null, 2), "arrToTree");