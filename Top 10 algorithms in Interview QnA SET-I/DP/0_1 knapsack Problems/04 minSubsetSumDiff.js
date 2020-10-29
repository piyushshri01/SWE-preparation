function subsetSum(arr, n){
    // calculate arr sum
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }

    // make table of sub problems
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

    // diff subset
    for(let i = 1; i < n+1; i++){
        for(let j = 1; j < sum+1; j++){
            if(arr[i-1] <= j){
               t[i][j] = t[i-1][j-arr[i-1]] || t[i-1][j]
            } else {
                t[i][j] = t[i-1][j]
            }
        }
    }

    // find min subset
    let diff = +Infinity;
    for (let j = Math.floor(sum/2); j >= 0; j--){
        if (t[n][j] == true){
            diff = sum - (2 * j)
            break;
        }
    }    
    return diff
}
let arr = [1, 2, 7]
let n = arr.length;
console.log(subsetSum(arr, n));