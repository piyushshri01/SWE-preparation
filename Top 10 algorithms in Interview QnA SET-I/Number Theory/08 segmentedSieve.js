// prime number concept 
// a^n-1 % n == 1  [where (1 < a < n-1) ] then n is prime number
function segmentedSieve(n){
    if(n == 2){
        return [2];
    } 
    else if(n == 3){
        return [2,3];
    }
    else {
        let arr = [2,3];
        for(let i = 4; i <= n; i++){
            if(pow(2, i-1)%i === 1){
                arr.push(i);
            }
        }
        return arr;
    }
    
}

// Power method
function pow(base, exp){
    if(exp === 0){
        return 1;
    } 
    if(exp === 1){
        return base;
    }
    return base * pow(base, exp-1);
}

// let n = 10;
let n = 20;
console.log(segmentedSieve(n));