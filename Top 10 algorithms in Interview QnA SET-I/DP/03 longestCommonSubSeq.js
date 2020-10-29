// // Recursive
// function longestCommonSeq(nArr, mArr, n, m){
//     if(n == 0 || m == 0){
//         return 0;
//     }
//     else{
//         if(nArr[n-1] == mArr[m-1]){
//             return 1 + longestCommonSeq(nArr, mArr, n-1, m-1)
//         } else {
//             return Math.max(longestCommonSeq(nArr, mArr, n, m-1), longestCommonSeq(nArr, mArr, n-1, m))
//         }
//     }
// }

// let nStr = "AGGTAB";
// let mStr = "GXTXAYB";
// let n = nStr.length;
// let m = mStr.length;
// console.log(longestCommonSeq(nStr, mStr, n, m));

// // Recursive memoize(bottom up approach)
// function longestCommonSeq(nArr, mArr, n, m, t){
//     if(n == 0 || m == 0){
//         return 0;
//     }
//     if(t[n][m] != -1){
//         return t[n][m]
//     }
//     else if(nArr[n-1] == mArr[m-1]){
//         return t[n][m] =  1 + longestCommonSeq(nArr, mArr, n-1, m-1, t)
//     } else {
//         return t[n][m] =  Math.max(longestCommonSeq(nArr, mArr, n, m-1, t), longestCommonSeq(nArr, mArr, n-1, m, t))
//     }
// }

// let nStr = "AGGTAB";
// let mStr = "GXTXAYB"
// let n = nStr.length;
// let m = mStr.length;
// let t = [];
// for(let i = 0; i < n+1; i++){
//     t[i] = []
//     for(let j = 0; j < m+1; j++){
//         t[i][j] = -1
//     }
// }
// console.log(longestCommonSeq(nStr, mStr, n, m, t));
// console.log(t);



// tablulation methode(top down approach)
function longestCommonSeq(nStr, mStr, n, m){
    let t = [];
    for(let i = 0; i < n+1; i++){
        t[i] = []
        for(let j = 0; j < m+1; j++){
            if(i == 0 || j == 0){
                t[i][j] = 0
            }
        }   
    }

    for(let i = 1; i < n+1; i++){
        for(let j = 1; j < m+1; j++){
            if(nStr[i-1] == mStr[j-1]){
                t[i][j] = 1+t[i-1][j-1]
            } else {
                t[i][j] = Math.max(t[i-1][j], t[i][j-1])
            }
        }
    }
    console.log(t);
    return t[n][m]
}

let nStr = "AGGTAB";
let mStr = "GXTXAYB"
let n = nStr.length;
let m = mStr.length;
console.log(longestCommonSeq(nStr, mStr, n, m));