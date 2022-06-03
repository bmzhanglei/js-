
// take the stairs ,performance bad
function stairs(n){
    if(n==1)return 1;
    if(n==2)return 2;
    return stairs(n-1) + stairs(n-2)
}

//tail recursion solution ,performance good
function stairsRecursion(n,l=1,m=2){
    if(n==1)return l;
    if(n==2)return m;
    return stairsRecursion(n-1,m,m+l)
}

// map store value ,performance good
const store = new Map()
function stairsMap(n){
    if(n==1)return 1;
    if(n==2)return 2;
    if(store.get(n)){
        return store.get(n)
    }else{
        const result = stairsMap(n-1) + stairsMap(n-2)
        store.set(n,result)
        return result
    }
}

// circulate solution, from down to up ,performance good， complexity O(n)
function stairsCircle(n){
    if(n==1)return 1;
    if(n==2)return 2;
    let pre = 2
    let prePre = 1
    let result = 0
    for(let i =3; i<=n; i++){
       result = pre + prePre;
       prePre = pre
       pre = result
    }
    return result
}
// console.log(stairs(10))
console.log(stairsCircle(100))
console.log(stairsRecursion(100))