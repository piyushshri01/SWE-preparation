// subset 
function subsetSum(arr, sum, n){
    let t = []

    for(let i = 0; i < n+1; i++){
        t[i] = []
        for(let j = 0; j < sum+1; j++){
            if(i == 0){
                t[i][j] = false;
            } 
            if(j == 0){
                t[i][j] = true
            }
        }
    }
    for(let i = 1; i < n+1; i++){
        for(let j = 1; j < sum+1; j++){
            if(arr[i-1] <= j){
               t[i][j] = t[i-1][j-arr[i-1]] || t[i-1][j]
            } else {
                t[i][j] = t[i-1][j]
            }
        }
    }
    console.log(t);
    return t[n][sum]
}

function equalSumPartition(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    if(sum % 2 !== 0){
        return false
    }
    else if( sum % 2 == 0){
        return subsetSum(arr, sum/2, arr.length)
    }
}



// Recursive
// function subsetSum(arr, sum, n, t){
//     console.log(t);
//     if(sum == 0){
//         return true
//     }
//     if(n == 0){
//         return false
//     }
//     if(t[n][sum]){
//         return t[n][sum]
//     }
//     else if(sum <= arr[n-1]){
//         return t[n][sum] = subsetSum(arr, sum-arr[n-1], n-1, t) || subsetSum(arr, sum, n-1, t)
//     }else {
//         return t[n][sum] = subsetSum(arr, sum, n-1, t)
//     }
    
// }

// function equalSumPartition(arr){
//     let sum  = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }

//     if(sum & 1){
//         return false
//     }
//     else {
//         let t = []
//         for(let i = 0; i < arr.length+1; i++){
//             t[i] = []
//             for(let j = 0; j < (sum/2)+1; j++){
//                 if(i == 0){
//                     t[i][j] = false
//                 }
//                 if(j == 0){
//                     t[i][j] = true
//                 }
//             }
//         }
//         return subsetSum(arr, sum/2, arr.length, t)
//     }
// }

let arr = [1, 5, 11, 5]
console.log(equalSumPartition(arr));