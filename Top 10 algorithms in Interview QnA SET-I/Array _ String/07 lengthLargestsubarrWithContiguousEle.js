function lengthLargestsubarrWithContiguousEle(arr){
    // Initialize result 
    let max_len = 1 
    for(let i = 0; i < arr.length-1; i++) { 
      
        // Initialize min and max for 
        // all subarrays starting with i 
        mn = arr[i] // 10
        mx = arr[i] // 10
  
        // Consider all subarrays starting 
        // with i and ending with j 
        for(let j = i+1; j < arr.length; j++){ 
          
            // Update min and max in 
            // this subarray if needed 
            mn = Math.min(mn, arr[j]) // 10
            mx = Math.max(mx, arr[j]) // 12
  
            // If current subarray has 
            // all contiguous elements 
            if ((mx - mn) == (j - i)){
                max_len = Math.max(max_len, mx - mn + 1) 
            }
        }
    }
          
    return max_len 
}

console.log(lengthLargestsubarrWithContiguousEle([10,12,11]));
// console.log(lengthLargestsubarrWithContiguousEle([14, 12, 11, 20]));
// console.log(lengthLargestsubarrWithContiguousEle([1, 56, 58, 57, 90, 92, 94, 93, 91, 45]));
