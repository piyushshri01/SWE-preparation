// function pythagoreanTriplet(arr){
//     for(let a = 0; a < arr.length; a++) {
//         arr[a] = arr[a] * arr[a];
//     }
//     console.log(arr);
//     let sum = 0;
//     for(let i = 0; i < arr.length-1; i++){
//         for(let j = i+1; j < arr.length; j++){
//             sum = arr[i] + arr[j]
//             if(exist(sum, arr)){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// // Helper function
// function exist(val , arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == val){
//             return true
//         }
//     }
//     return false;
// }


// Python program that returns true if there is  
// a Pythagorean Triplet in a given array. 
  
// Returns true if there is Pythagorean 
// triplet in ar[0..n-1] 
function pythagoreanTriplet(arr){ 
    // Square all the elemennts 
    for(let a = 0; a < arr.length; a++) {
        arr[a] = arr[a] * arr[a];
    }
  
    // sort array elements 
    arr.sort(function(a, b){return a - b});
    // fix one element 
    // and find other two 
    // i goes from n - 1 to 2 
    let j, k;
    for (let i = arr.length-1; i >= 0; i--){ 
        // start two index variables from  
        // two corners of the array and  
        // move them toward each other 
        j = 0
        k = i - 1
        while (j < k){
            // A triplet found 
            if (arr[j] + arr[k] == arr[i]){ 
                return true
            }
            else{ 
                if (arr[j] + arr[k] < arr[i]) j = j + 1
                else k = k - 1
            }
        }
    }
    // If we reach here, then no triplet found 
    return false
}
    

console.log(pythagoreanTriplet([3, 1, 4, 6, 5])); // [1,3,4,5,6] => [1,9,16,25,36]
console.log(pythagoreanTriplet([10, 4, 6, 12, 5]));
