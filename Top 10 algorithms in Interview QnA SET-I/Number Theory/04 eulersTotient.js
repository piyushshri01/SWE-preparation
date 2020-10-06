function eulersTotient(n) {
    let result = 1;
    for(let i = 2; i < n; i++){
        if(gcd(i, n) === 1){
            result++;
        }
    }
    return result;
}

// Gcd of two numbers
function gcd(a, b) 
{ 
    if(a < b) 
        return gcd(b, a); 
    else if(a%b == 0) 
        return b; 
    else return gcd(b, a%b);   
} 

function main (n) {
    for(let i = 1; i <= n; i++){
        console.log(`ET(${i}) = ${eulersTotient(i)}`);
    }
}

main(10)