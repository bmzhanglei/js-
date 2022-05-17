1、你看过webpack的底层代码嘛？
2、你看过vscode的底层代码嘛？
3、你是否了解过其他的除了vue的框架？
4、对⽐vue来说你觉得vue另外两款框架的好处有哪些？
5、你是否使⽤过sass less和了解过底层代码？
6、Electron Chromium你是否有了解过？
7、你怎么看node.js这项技术？

// 题意是给了我⼀个数组和⼀个整数，让我判断数组nums[0]每隔k个后是不是和nums[0]⼀样⼤意好像是这样的
// 给了三个例⼦
// nums = [1,2,3,1] k = 3 true
// nums = [1,0,1,1] k = 1 true
// nums = [1,2,3,1,2,3] k = 2 false
//这是我的答案
 var containsNearbyDuplicate = function (nums, k) {
    let flage = ''
    nums.forEach((value, index, array) => {
      for (let x = 0; x < k; x++) {
        if (nums[x] == value) {
          flage = true
          break
        } else {
          flage = false
        }
      }
    })
    if (flage == true) {
      console.log(true)
    } else {
      console.log(false)
    }
  }
  containsNearbyDuplicate([1, 0, 1, 1], 1)
知识问答环节
        1、vue2和vue3 的却别？
        2、你知道为什么会跨域嘛？怎么解决跨域？
        3、什么是捕获？为什么会发⽣事件冒泡？
        4、前后端分离的好处是什么？
        5、js操作数组的⽅法有哪⼏种？
        6、遍历数组的⽅式有⼏种？
        7、箭头函数的作⽤域？this指向？
        8、什么是闭包？闭包会出现什么问题？（我当时想到了⼀个内存泄露讲完⾯试官好像语⽓⼀下就好起来了）
        总结⼀下：虽然算法题我都没做出来什么东西。但是这次⾯试还是过了。我当⼼他问太多问题我在vue2和vue3的区别介绍哪⾥讲的
很细 ⽬录结构到vite等等等等。
