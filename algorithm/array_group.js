
// 数组分组
// 描述
// 输入int型数组，询问该数组能否分成两组，使得两组中各元素加起来的和相等，并且，所有5的倍数必须在其中一个组中，所有3的倍数在另一个组中（不包括5的倍数），
//不是5的倍数也不是3的倍数能放在任意一组，可以将数组分为空数组，能满足以上条件，输出true；不满足时输出false。

// 数据范围：每个数组大小满足 1 \le n \le 50 \1≤n≤50  ，输入的数据大小满足 |val| \le 500 \∣val∣≤500 
// 输入描述：
// 第一行是数据个数，第二行是输入的数据

// 输出描述：
// 返回true或者false
//    let arr = [1,5, -5, 1,3,3,-4,3,-3]
//    let arr = [1, 5, -5, 1]
    let arr = [3, 5, 7,9,4,4,1,-3,8,4]

    let a3 = arr.filter(res=>res%3==0)
    let a5 = arr.filter(res=>res%5==0)
    let rest = arr.filter(res=>!(res%3==0 || res%5==0))
    console.log(a3)
    console.log(a5)
    console.log(rest)       

    let a33 = a3.reduce((a,b)=>a+b,0)
    let a55 = a5.reduce((a,b)=>a+b,0)

    let flag = false
   
     out:
     for(let i=0;i<rest.length;i++){
         for(let j=1;j<=rest.length;j++){
             let r3 = rest.slice(i,j)
             let r5 = getRest(i,j)
        
             let r3_sum = r3.reduce((a,b)=>a+b,0)
             let r5_sum = r5.reduce((a,b)=>a+b,0)
             if(a33 + r3_sum === a55 + r5_sum){
                 console.log("1111")
                 console.log(r3,a3)
                 console.log(r5,a5)
                 flag = true
                 break out;
             }
             if(a55 + r3_sum === a33 + r5_sum){
                 console.log("2222")
                 console.log(r3,a5)
                 console.log(r5,a3)
                 flag = true
                 break out;
             }                
         }
     }

     function getRest(i,j){
        return [...rest.slice(0,i),...rest.slice(j)]
     }

     console.log(flag)