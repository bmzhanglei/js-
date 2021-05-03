// var obj={
//     0:1,
//     1:2,
//     2:3, //没有length,length:0  伪装成类似数组的类型
//     push:[].push
// }

// Array.from(obj) // []

// obj.push(5)
// console.log(obj) //{ '0': 5, '1': 2, '2': 3, push: [Function: push], length: 1 }

// const newArr = Array.from(obj,function(item,index){
//    return {
//        studentId: this.prefix+item,
//        order:index
//    }
// },{
//     prefix:"No."
// })
// console.log(newArr)

var x;
if(x === void 0) {
    console.log(void 0 === undefined)
    // 执行这些语句
}

if(typeof y === void 0) {
    // 抛出一个RenferenceError错误(与`typeof`相比)
}



