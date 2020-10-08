// // method 1
// // get nCr % p
// function nCr(n, r, p){
//     let resOfN = 1;
//     for(let i = 1; i <= r; i++){
//         resOfN *= n;
//         n = n-1;
//     }
//     let ncr = Math.floor(resOfN / fact(r));
//     return ncr%p;
// }

// // find factorial of n number
// function fact(n) {
//     if(n < 0){
//         return -1
//     }
//     else if(n === 0 || n === 1){
//         return 1;
//     }
//     return n * fact(n-1);
// }

// n, r, p
// console.log(nCr(10, 2, 13));
// console.log(nCr(1000, 900, 13));

// Method 2
// A Lucas Theorem based solution to compute nCr % p 
  
// Returns nCr % p.  In this Lucas Theorem based program, 
// this function is only called for n < p and r < p. 
function nCrModpDP(n, r, p) 
{ 
    // console.log(n, r, p);
    // The array C is going to store last row of 
    // pascal triangle at the end. And last entry 
    // of last row is nCr 
    let C = [];
    for(let q = 0; q < r+1; q++) {
        C[q] = 0;
    }
  
    C[0] = 1; // Top row of Pascal Triangle 
    // One by constructs remaining rows of Pascal 
    // Triangle from top to bottom 
    for (let i = 1; i <= n; i++) 
    { 
        // Fill entries of current row using previous 
        // row values 
        for (let j = Math.min(i, r); j > 0; j--) {
            // nCj = (n-1)Cj + (n-1)C(j-1); 
            C[j] = (C[j] + C[j-1])%p; 
        }
    } 
    return C[r]; 
} 
  
// Lucas Theorem based function that returns nCr % p 
// This function works like decimal to binary conversion 
// recursive function.  First we compute last digits of 
// n and r in base p, then recur for remaining digits 
function nCrModpLucas(n, r, p) 
{ 
   // Base case 
   if (r==0) 
      return 1; 
  
   // Compute last digits of n and r in base p 
   let ni = n%p;
   let ri = r%p; 
  
   // Compute result for last digits computed above, and 
   // for remaining digits.  Multiply the two results and 
   // compute the result of multiplication in modulo p. 
   return (nCrModpLucas(Math.floor(n/p), Math.floor(r/p), p) * // Last digits of n and r 
           nCrModpDP(ni, ri, p)) % p;  // Remaining digits 
}

// n, r, p
console.log(nCrModpLucas(10, 2, 13));
console.log(nCrModpLucas(1000, 900, 13));
