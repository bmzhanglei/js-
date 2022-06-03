//HJ75 公共子串计算
// const l1 = readline();
// const l2 = readline(); 
// const l1 = 'asdf';
// const l2 = 'sd'; 
// const [short, long] = l1.length >= l2.length ? [l2,l1]: [l1,l2];
// let dp = [];
// let max = 0; 
// for(let i=0;i<short.length;i++){
//     dp[i] = 0;
//     for(let j=0;j<=i;j++){
//         let s = short.slice(j,i+1)
//         if(long.indexOf(s)>-1){
//            dp[i] = Math.max(dp[i],s.length);
//            max = Math.max(max,dp[i]);
//         }
//     }
// }
// console.log(max);

//robot walk
// function process(cur, rest, aim, n) {
//     if (rest == 0) {
//         // console.log(cur, aim)
//         return cur == aim ? 1 : 0
//     } else if (cur == 1) {
//         return process(2, rest - 1, aim, n);
//     } else if (cur == n) {
//         return process(n - 1, rest - 1, aim, n);
//     } else {
//         return process(cur - 1, rest - 1, aim, n) + process(cur + 1, rest - 1, aim, n)
//     }
// }
// console.log(process(2, 4, 4, 5))

// function way(n, start, aim, k) {
//     if (n < 2 || start < 1 || start > n || aim < 1 || aim > n || k < 1) {
//         return -1
//     }
//     const dp = new Array(n + 1).fill(new Array(k + 1).fill(0));
//     console.log(dp)
//     dp[aim][0] = 1;
//     for (let rest = 1; rest <= k; rest++) {
//         dp[1][rest] = dp[2][rest - 1];
//         for (let cur = 2; cur < n; cur++) {
//             dp[cur][rest] = dp[cur - 1][rest - 1] + dp[cur + 1][rest - 1];
//         }
//         dp[n][rest] = dp[n - 1][rest - 1]
//     }
//     return dp[start][k]
// }
// console.log(way(5, 2, 4, 6))