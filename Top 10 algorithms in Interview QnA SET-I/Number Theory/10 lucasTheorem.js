// get nCr
function nCr(n, r, p){
    let resOfN = 1;
    for(let i = 1; i <= r; i++){
        resOfN *= n;
        n = n-1;
    }
    let ncr = Math.floor(resOfN / fact(r));
    return ncr%p;
}

// find factorial of n number
function fact(n) {
    if(n < 0){
        return -1
    }
    else if(n === 0 || n === 1){
        return 1;
    }
    return n * fact(n-1);
}

// n, r, p
// console.log(nCr(10, 2, 13));
// console.log(nCr(1000, 900, 13));
