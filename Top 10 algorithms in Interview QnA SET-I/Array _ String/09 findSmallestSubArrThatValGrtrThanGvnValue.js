// O(n^2) Sol
// function findSmallestSubArrThatValGrtrThanGvnValue(arr, val){
//     let sum = 0;
//     let start = 0;
//     let end = 0;
//     let minLen = arr.length;
//     let res = 0
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i; j < arr.length; j++) {
//             sum+= arr[j];
//             res++;
//             if(sum > val && j-i < minLen){
//                 start = i;
//                 end = j;
//                 // minLen = j-i;
//                 minLen = res;
//             }
//         }
//         res = 0;
//         sum = 0;
//     }
//     if(minLen == arr.length){
//         return 'Not Possible'
//     }
//     return minLen;
// }

// O(n) Sol
function findSmallestSubArrThatValGrtrThanGvnValue(arr, val){
    // Initialize current sum and minimum length 
    let n = arr.length;
    let curr_sum = 0
    let min_len = n + 1
    // Initialize starting and ending indees 
    let start = 0
    let end = 0
    while (end < n){ 
      
        // Keep adding array elements while current 
        // sum is smaller than val 
        while (curr_sum <= val && end < n){ 
            curr_sum += arr[end] 
            end+= 1
        }
  
        // If current sum becomes greater than val. 
        while (curr_sum > val && start < n){
          
            // Update minimum length if needed 
            if (end - start < min_len){
                min_len = end - start 
            } 
  
            // remove starting elements 
            curr_sum -= arr[start] 
            start+= 1
        }    
    }  
    if(min_len > n){
        return 'Not possible'
    }
    return min_len
}
  

console.log(findSmallestSubArrThatValGrtrThanGvnValue([1, 4, 45, 6, 0, 19],51));
console.log(findSmallestSubArrThatValGrtrThanGvnValue([1, 10, 5, 2, 7], 9));
console.log(findSmallestSubArrThatValGrtrThanGvnValue([1, 11, 100, 1, 0, 200, 3, 2, 1, 250], 280));
console.log(findSmallestSubArrThatValGrtrThanGvnValue([1, 2, 4], 8));
