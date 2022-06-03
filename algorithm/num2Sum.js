
// use map store number ,complexity O(n)
// let arr = [2, -90,99, 9, 44, 3, 77, 7, 4]  // the sum of 2 numbers = 9

// function numSum(arr, target) {
//     let map = new Map()
//     let result = [-1, -1]
//     for (let [index, item] of arr.entries()) {
//         let val = target - item;
//         const n = map.get(val)
//         if (typeof n === 'number') {
//             result = [n, index]
//             break
//         } else {
//             map.set(item, index)
//         }
//     }
//     return result
// }

// console.log(numSum(arr, 9))


// merge 2 increasing ordered arays ，brute force algorithms
const num1 = [1, 2, 3, 0, 0, 0], m = 3, num2 = [2, 5, 6], n = 3;
// const num1 = [1], m = 1, num2 = [], n = 0;
// function mergeArray(num1, m, num2, n) {
//     num1.splice(m, num1.length - m);
//     num2.splice(n, num2.length - n);
//     num1.push(...num2)
//     num1.sort((a, b) => a - b)   
// }

// dual pointers are in reverse order
function mergeArray(num1, m, num2, n) {
    num1.splice(m, num1.length - m);
    num2.splice(n, num2.length - n);
    let len = m + n;
    for (let i = len - 1, n1Last = m - 1, n2Last = n - 1; i >= 0; i--) {
        if (n1Last < 0) {
            num1[i] = num1[n2Last]
        } else if (n2Last < 0) {
            break
        } else if (num1[n1Last] > num2[n2Last]) {
            num1[i] = num1[n1Last--]
        } else {
            num1[i] = num2[n2Last--]
        }
    }
}
mergeArray(num1, m, num2, n)
console.log(num1)



