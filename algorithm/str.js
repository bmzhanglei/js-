

//字符串序列判定
// let s= 'br'
// let l= 'abcde'
// let n= s.length;
// let m= l.length
// let j=0;
// let k=0;
// while(j<n && k<m){
//     if(s[j]==l[k]){
//         j+=1
//     }
//     k+=1
// }
// if(j==n){
//     console.log(l.lastIndexOf([...s].slice(-1)[0]))
// }else{
//     console.log(-1)
// }


//最大括号深度

// 输入
// let input = "((([]){(()(})}))"
// let input = "((([]){[[(])]}))"

// // 记录括号的栈
// let stack = []
// // 标记：字符串是否合法
// let flag = true
// // 最大深度
// let max = 0

// // 循环遍历输入
// for (const x of input) {
//     if ((x === '(') || (x === '[') || (x === '{')) {
//         // 如果是左括号，就入栈，同时判断此时栈的深度，以更新最大深度
//         stack.push(x)
//         max = Math.max(max, stack.length)
//         continue
//     }

//     if ((x === ')')) {
//         // 若遇到右括号，判断此时栈顶的括号与它是否匹配，匹配则继续，不匹配，输出0，结束
//         if (stack.pop() === '(') {
//             continue
//         } else {
//             console.log(0);
//             flag = false
//             break
//         }
//     }

//     if ((x === ']')) {
//         if (stack.pop() === '[') {
//             continue
//         } else {
//             console.log(0);
//             flag = false
//             break
//         }
//     }

//     if ((x === '}')) {
//         if (stack.pop() === '{') {
//             continue
//         } else {
//             console.log(0);
//             flag = false
//             break
//         }
//     }
// }

// 若标记为true，代表匹配无误，且此时栈要为空，则输出最大深度，否则输出0，代表匹配不合法
// if (flag) {
//     if (stack.length === 0) {
//         console.log(max);
//     } else {
//         console.log(0);
//     }
// }

//二分查找算法
//哈希查找算法
//冒泡排序算法
//快速排序算法
//二叉树的深度遍历算法
//二叉树的广度遍历算法
//贪心算法

//二分查找算法
// var search = function (nums, target) {
//     let [minIndex, maxIndex] = [0, nums.length - 1];
//     while (minIndex <= maxIndex) {
//         const mid = Math.floor((maxIndex + minIndex) / 2);
//         const num = nums[mid];
//         if (num < target) {
//             minIndex = mid + 1
//         } else if (num > target) {
//             maxIndex = mid - 1;
//         } else {
//             return mid;
//         }
//     }
//     return -1;
// };

// console.log("结果索引", search([1, 2, 3, 4, 5, 6, 7], 5));

//冒泡排序
// function sort(arr,flag = true){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length-1;j++){
//             if(arr[j]>arr[j+1] && flag || arr[j]<arr[j+1] && !flag){
//                 [arr[j+1],arr[j]]=[arr[j],arr[j+1]]
//             }
//         }
//     }
//     return arr
// }

//快速排序
// function quickSort( arr ,flag=true) {
//     if(arr.length <= 1) return arr; 
//     const [left,right,num] = [[],[],arr[0]];
//     for(let i = 1;i < arr.length; i++) {
//         if(flag){
//             if(arr[i]<=num) left.push(arr[i]);
//             else right.push(arr[i]);
//         }else{
//             if(arr[i]<=num) right.push(arr[i]);
//             else left.push(arr[i]);
//         }
//     }
//     return quickSort(left,flag).concat([num],quickSort(right,flag));
// }

// console.log(quickSort([2,4,5,1,7,-2],false))

//贪心算法，背包问题
// function knapsack(weights, values, W){
//     var n = weights.length;
//     var f = new Array(W+1).fill(0)
//     for(var i = 0; i < n; i++) {
//         for(var j = W; j >= weights[i]; j--){  
//             f[j] = Math.max(f[j], f[j-weights[i]] +values[i]);
//         }
//         console.log(f.concat()) //调试
//     }
//     return f[W];
// }
// var b = knapsack([2,2,6,5,4],[6,3,5,4,6],10)
// var b = knapsack([0.5,2,1,0.5,0.5,1,0.5],[9,9,9,7,6,8,5],3)
// var b = knapsack([1,4,2,1,1,2,1],[9,9,9,7,6,8,5],6)
// console.log(b)

//完全背包
// function unboundedKnapsack(weights, values, W) {
//     var n = weights.length,
//     f = new Array(W + 1).fill(0);
//     for(var i=0; i< n; ++i){
//         for(j = weights[i]; j <= W; ++j) {
//           var tmp = f[j-weights[i]]+values[i];
//           f[j] = (f[j] > tmp) ? f[j] : tmp;
//         }
//     }
//     console.log(f)//调试
//     return f[W];
// }
// var a = unboundedKnapsack([3, 2, 2], [5, 10, 20], 5); //输出40
// console.log(a);
// var b = unboundedKnapsack([2, 3, 4, 7], [1, 3, 5, 9], 10); //输出12
// console.log(b);

//多重背包
// function knapsack(weights, values, numbers,  W){
//     var n = weights.length;
//     var f= new Array(W+1).fill(0)
//     for(var i = 0; i < n; i++) {
//         for(var k=0; k<numbers[i]; k++)//其实就是把这类物品展开，调用numbers[i]次01背包代码  
//          for(var j=W; j>=weights[i]; j--)//正常的01背包代码  
//              f[j]=Math.max(f[j],f[j-weights[i]]+values[i]);  
//     }
//     return f[W];
// }
// var b = knapsack([2,3,1 ],[2,3,4],[1,4,1],6)
// console.log(b)

//多重背包 二进制优化
// function mKnapsack(weights, values, numbers, W) {
//     var kind = 0; //新的物品种类
//     var ws = []; //新的物品重量
//     var vs = []; //新的物品价值
//     var n = weights.length;
//     /**
//      * 二进制分解
//      * 100=1+2+4+8+16+32+37，观察可以得出100以内任何一个数都可以由以上7个数选择组合得到，
//      * 所以对物品数目就不是从0都100遍历，而是0，1，2，4，8，16，32，37遍历，时间大大优化。
//      */
//     for (let i = 0; i < n; i++) {
//         var w = weights[i];
//         var v = values[i];
//         var num = numbers[i];
//         for (let j = 1; ; j *= 2) {
//             if (num >= j) {
//                 ws[kind] = j * w;
//                 vs[kind] = j * v;
//                 num -= j;
//                 kind++;
//             } else {
//                 ws[kind] = num * w;
//                 vs[kind] = num * v;
//                 kind++;
//                 break;
//             }
//         }
//     }
//     //01背包解法
//     var f = new Array(W + 1).fill(0);
//     for (let i = 0; i < kind; i++) {
//         for (let j = W; j >= ws[i]; j--) {
//             f[j] = Math.max(f[j], f[j - ws[i]] + vs[i]);
//         }
//     }
//     return f[W];
// }

// var b = mKnapsack([2,3,1 ],[2,3,4],[1,4,1],6)
// console.log(b) //9


// 二叉树的深度和广度优先遍历实现
function TreeNode(val) {
    this.data = val;
    this.left = null; 
    this.right = null; 
}

// 创建一个二叉树
function createTree(nodeList) {
    // 检测输入是否为一个数组
    if(Array.isArray(nodeList)) {
      const len = nodeList.length
      if(!len) return;
      else {
        // 获取最前头的节点值
        const data = nodeList.shift()
        // 构建二叉树
        let node = null;
        // 如果值不为null，则递归为此节点生成左子树和右子树
        if(data) {
          node = new TreeNode(data)
          node.left = createTree(nodeList)
          node.right = createTree(nodeList)
        }
        return node
      }
    }else{
      throw Error("请输入一个节点序列")
    }
}
const tree = createTree([1,2,null,null,3,4,null,null,7,8])

//深度遍历
function preOrderTraversal(nodeTree){
    if(!nodeTree) return;
    else{
        console.log(nodeTree.data)
        preOrderTraversal(nodeTree.left)
        preOrderTraversal(nodeTree.right)
    }
}

// 栈方式实现前序遍历
function stackPreTravel(nodeTree) {
    if(!nodeTree) return;
    let stack = []
    let node = nodeTree
    // 如果节点不为空，且栈不为空，则继续循环
    while(node || stack.length) {
        // 如果节点不为空，则继续向左遍历
        while(node) {
            // console.log(node.data); //  前序
            // 将存在的左节点入栈
            stack.push(node)
            node = node.left
        }
        // 当左节点为空时，但栈不为空，遍历右节点子树
        if(stack.length) {
            node = stack.pop()
            // console.log(node.data); //  中序
            node = node.right;
        }
    }   
}
// stackPreTravel(tree)

//广度优先遍历
function levelOrderTravel(nodeTree) {
    // 如果树为空，结束
    if(!nodeTree) return;
    // 初始化一个队列
    let queue = []
    // 将根节点入队
    queue.push(nodeTree)
    let node = null
    // 只要队列不为空，继续循环
    while(queue.length) {
      // 按顺序取出队列中最早入队的节点
      node = queue.shift()
      console.log(node.data);
      // 如果出队节点存在左孩子，就将其左孩子入队
      if(node.left) {
        queue.push(node.left)
      }
      // 如果出队节点存在右孩子，就将其右孩子入队
      if(node.right) {
        queue.push(node.right)
      }
    }
  }

  levelOrderTravel(tree)