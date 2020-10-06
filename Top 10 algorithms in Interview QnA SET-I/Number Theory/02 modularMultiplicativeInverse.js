function modularMultiplicativeInverse(a, m){
    let tr = 1;
    while(tr <= m){
        if((a*tr)% m === 1){
            return tr;
        }
        tr++;
    }
    return 1;
}

// // Exp. 1
// let a = 3;
// let m = 11;

// Exp. 2
let a = 10;
let m = 17;
console.log(modularMultiplicativeInverse(a,m));