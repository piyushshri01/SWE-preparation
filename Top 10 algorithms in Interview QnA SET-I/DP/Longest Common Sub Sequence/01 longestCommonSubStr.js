// =top down approach
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

    let res = 0;
    for(let i = 1; i < n+1; i++){
        for(let j = 1; j < m+1; j++){
            if(nStr[i-1] == mStr[j-1]){
                t[i][j] = 1+t[i-1][j-1]
                res = Math.max(res, t[i][j])
            } else {
                t[i][j] = 0
            }
        }
    }
    console.log(t);
    // return t[n][m]
    return res;
}

let nStr = "heap" //"AGGTAB";
let mStr = "pea" //"AGGXTXAYB"
let n = nStr.length;
let m = mStr.length;
console.log(longestCommonSeq(nStr, mStr, n, m));