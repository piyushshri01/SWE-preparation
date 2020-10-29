// // recursive memozition
// // table
// let t = [];
// for(let i = 0; i < 102; i++){
//     t[i] = []
//     for(let j = 0; j < 1002; j++){
//         t[i][j] = -1
//     }
// }

// function knapsack(weightArr, valArr, weight, n){
//     if(n == 0 || weight == 0){
//         return 0
//     }
//     if(t[n][weight] !== -1){
//         return t[n][weight]
//     }
//     if (weightArr[n-1] <= weight){
//         return t[n][weight] = Math.max(valArr[n-1] + knapsack(weightArr, valArr, weight-weightArr[n-1], n-1) , knapsack(weightArr, valArr, weight, n-1))
//     }
//     else if(weightArr[n-1] > weight){
//         return t[n][weight] = knapsack(weightArr, valArr, weight, n-1)
//     }
    
// }
// let valArr = [60, 100, 120]
// let weightArr = [10, 20, 30]
// let weight = 50;
// let n = valArr.length;
// console.log(knapsack(weightArr, valArr, weight, n));


// tabulation 
let valArr = [60, 100, 120]
let weightArr = [10, 20, 30]
let weight = 50;
let n = valArr.length;
let t = []

for(let i = 0; i < n+1; i++){
    t[i] = []
    for(let j = 0; j < weight+1; j++){
        if(i==0 || j==0){
            t[i][j] = 0;
        }
    }
}

function knapsack(weightArr, valArr, w, n){
    for(let i = 1; i < n+1; i++){
        for(let j = 1; j < w+1; j++){
            if(weightArr[i-1] <= w){
               t[i][j] = Math.max(valArr[i-1]+ t[i-1][j-weightArr[i-1]], t[i-1][j])
            } else {
                t[i][j] = t[i-1][j]
            }
        }
    }
    return t[n][w]
}

console.log(knapsack(weightArr, valArr, weight, n));