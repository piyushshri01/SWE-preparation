/* Iterative Function to calculate (a^n)%p in O(logy) */
function power(a, n, p) 
{ 
    let res = 1;      // Initialize result 
    a = a % p;  // Update 'a' if 'a' >= p 
  
    while (n > 0) 
    { 
        // If n is odd, multiply 'a' with result 
        if (n & 1) 
            res = (res*a) % p; 
  
        // n must be even now 
        n = n>>1; // n = n/2 
        a = (a*a) % p; 
    } 
    return res; 
} 
  
/*Recursive function to calculate gcd of 2 numbers*/
function gcd(a, b) 
{ 
    if(a < b) 
        return gcd(b, a); 
    else if(a%b == 0) 
        return b; 
    else return gcd(b, a%b);   
} 
  
// If n is prime, then always returns true, If n is 
// composite than returns false with high probability 
// Higher value of k increases probability of correct 
// result. 
function isPrime(n, k) 
{ 
   // Corner cases 
   if (n <= 1 || n == 4)  return false; 
   if (n <= 3) return true; 
  
   // Try k times 
   while (k>0) 
   { 
       // Pick a Math.random()ber in [2..n-2]         
       // Above corner cases make sure that n > 4 
       let a = 2 + Math.floor(Math.random()%(n-4)); 
  
       // Checking if a and n are co-prime 
       if (gcd(n, a) != 1) 
          return false; 
   
       // Fermat's little theorem 
       if (power(a, n-1, n) != 1) 
          return false; 
  
       k--; 
    } 
  
    return true; 
}

function main() {
    let k = 3; 
    isPrime(11, k)?  console.log("true"):console.log("false"); 
    isPrime(15, k)?  console.log("true"):console.log("false"); 
}

main()