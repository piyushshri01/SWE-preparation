// // Recursive
// function MatrixChainOrder(arr, p, n){
//     if(p == n){
//         return 0;
//     }
//     let min = Infinity;
//     for(let i = p; i < n; i++){
//         let count = (MatrixChainOrder(arr, p, i)
//                  + MatrixChainOrder(arr, i+1, n)
//                  + arr[p-1] * arr[i] * arr[n])
 
//         if (count < min){
//             min = count;
//         }
//     }
//     return min;
// }
// let arr = [1, 2, 3, 4, 3];
// let i = 1;
// let j = arr.length-1;
// console.log(MatrixChainOrder(arr, i , j));


// Recursive [bottom up dp]
function MatrixChainOrder(arr, p, n, t){
    if(p == n){
        return 0;
    }
    if(t[p][n] !== -1){
        return t[p][n]
    }
    let min = Infinity;
    for(let i = p; i < n; i++){
        let count = (MatrixChainOrder(arr, p, i, t)
                 + MatrixChainOrder(arr, i+1, n, t)
                 + arr[p-1] * arr[i] * arr[n])
 
        if (count < min){
            min = count;
        }
    }
    t[p][n] = min;
    return t[p][n]
}
let arr = [1, 2, 3, 4, 3];
let i = 1;
let j = arr.length-1;
let t = [];
// i and j is less than constraints
for(let i = 0; i < 1001; i++){
    t[i] = []
    for(let j = 0; j < 1001; j++){
        t[i][j] = -1
    }
}
console.log(MatrixChainOrder(arr, i , j, t));
// console.log(t);