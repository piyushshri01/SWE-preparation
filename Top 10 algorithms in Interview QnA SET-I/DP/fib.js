// fib = 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 
let n = 150
t = []
t[0] = 0;
for(let i = 0; i < n+1; i++){
    t[i] = 0;
}
function fib(n){
    if(n <= 0){
        return 0
    }
    if(n <= 2){
        return 1
    }
    if(t[n]){
        return t[n]
    }
    return t[n] = fib(n-1) + fib(n-2)
}

console.log(fib(n));