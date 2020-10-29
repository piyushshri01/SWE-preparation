let arr = [2, 3, 7, 8, 10]
let target = 11;
let n = arr.length;
let t = []

for(let i = 0; i < n+1; i++){
    t[i] = []
    for(let j = 0; j < target+1; j++){
        if(i == 0){
            t[i][j] = false;
        } 
        if(j == 0){
            t[i][j] = true
        }
    }
}

// Recursive
// function subsetSum(arr, sum, n){
//     if(sum == 0){
//         return true
//     }
//     if(n == 0){
//         return false
//     }
//     else if(sum >= arr[n-1]){
//         return t[n][sum] = (subsetSum(arr, sum-arr[n-1], n-1) || subsetSum(arr, sum, n-1))
//     } else if(sum < arr[n-1]){
//         return t[n][sum] = subsetSum(arr, sum, n-1)
//     }
// }

function subsetSum(arr, sum, n){
    for(let i = 1; i < n+1; i++){
        for(let j = 1; j < sum+1; j++){
            if(arr[i-1] <= j){
               t[i][j] = t[i-1][j-arr[i-1]] || t[i-1][j]
            } else {
                t[i][j] = t[i-1][j]
            }
        }
    }
    return t[n][sum]
}



console.log(subsetSum(arr, target, n));
console.log(t);
