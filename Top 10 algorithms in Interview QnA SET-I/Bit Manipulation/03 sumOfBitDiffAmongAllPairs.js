// O(n^2)
function sumOfBitDiffAmongAllPairs(a){
    let n = a.length; 
    let ans = 0;
    let b1,b2; 
  
    for (let i = 0; i < n - 1; i++) { 
        let count = 0; 
  
        for (let j = i; j < n; j++) { 
            // Bitwise and of pair (a[i], a[j]) 
            let x = a[i] & a[j]; 
            // Bitwise or of pair (a[i], a[j]) 
            let y = a[i] | a[j]; 
  
            b1 = x; 
            b2 = y; 
  
            // to count set bits in and of two numbers 
            let r1 = countSet(b1); 
            // to count set bits in or of two numbers 
            let r2 = countSet(b2); 
  
            // Absolute differences at individual bit positions of two 
            // numbers is contributed by pair (a[i], a[j]) in count 
            count = Math.abs(r1 - r2); 
  
            // each pair adds twice of contributed count 
            // as both (a, b) and (b, a) are considered 
            // two separate pairs. 
            ans = ans + (2 * count); 
        } 
    } 
    return ans;
}
// clount set bits helper function 
function countSet(n){
    let count = 0;
    while(n > 0){
        count += (n&1);
        n = n>>1;
    }
    return count;
}

console.log(sumOfBitDiffAmongAllPairs([1,2]));
console.log(sumOfBitDiffAmongAllPairs([1,3,5]));

// O(n)
function sumOfBitDiffAmongAllPairsOptimize(arr){
    // optimize solution
    let ans = 0  // Initialize result 
    let n = arr.length;
    // traverse over all bits 
    for (let i = 0; i < 32; i++){
         // count number of elements with i'th bit set 
         count = 0
         for (let j = 0; j < n; j++){
            if ( (arr[j] & (1 << i)) ) count+= 1
         } 
             
         // Add "count * (n - count) * 2" to the answer 
         ans += (count * (n - count) * 2);
    }   
    return ans 
}
    


console.log(sumOfBitDiffAmongAllPairsOptimize([1,2]));
console.log(sumOfBitDiffAmongAllPairsOptimize([1,3,5]));
    