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
            if(nStr[i-1] == mStr[j-1] ){
                t[i][j] = 1+t[i-1][j-1]
            } else {
                t[i][j] = Math.max(t[i-1][j], t[i][j-1])
            }
        }
    }
    // console.log(t);
    // LCS (t[n][m])
    // return t[n][m]
    // if seq pattern matched then result is true otherwise false
    if(nStr.length === t[n][m]){
        return true;
    } else {
        return false;
    }
}

let nStr = "AXYZ";
let mStr = "ADXCPY"
let n = nStr.length;
let m = mStr.length;
console.log(longestCommonSeq(nStr, mStr, n, m));