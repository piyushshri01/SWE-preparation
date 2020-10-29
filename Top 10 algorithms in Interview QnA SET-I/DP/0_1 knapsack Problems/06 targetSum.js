function targetSum(arr, diff, n){
    // sum of arr
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }

    // get sum [s1]
    // drive formula = ([sum(s1) - sum(s2) = diff]) + ([sum(s1) + sum(s2) = sum(arr)]) ==> sum(s1) = (diff + sum) / 2
    let s1 = Math.floor((diff + sum) / 2) 
    // make table
    let t = [];
    for(let i = 0; i < n+1; i++){
        t[i] = []
        for(let j = 0; j < s1+1; j++){
            if(i == 0){
                t[i][j] = false
            }
            if(j == 0){
                t[i][j] = true
            }
        }
    }

    // count subset
    for(let i = 1; i < n+1; i++){
        for(let j = 1; j < s1+1; j++){
            if(arr[i-1] <= j){
                t[i][j] = t[i-1][j-arr[i-1]] + t[i-1][j]
            } else if(arr[i-1] > j) {
                t[i][j] = t[i-1][j]
            }
        }
    } 
    return t[n][diff]  
}

let arr = [1,1,2,3];
let sum = 1;
let n = arr.length;
console.log(targetSum(arr, sum, n));