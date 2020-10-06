// Helper function
function pow(base, exp){
    if(exp === 0){
        return 1;
    }
    if(exp === 1){
        return base;
    }
    return base * pow(base, exp-1);
}

// modularExponentiation
function modularExponentiation(x, y, p){
    return pow(x, y) % p;
}

// // Exp. 1
// let x = 2;
// let y = 3;
// let p = 5;

// Exp. 1
let x = 2;
let y = 5;
let p = 13;
console.log(modularExponentiation(x, y, p));


