function longestCommonSeq(nStr, n){
    let t = [];
    for(let i = 0; i < n+1; i++){
        t[i] = []
        for(let j = 0; j < n+1; j++){
            if(i == 0 || j == 0){
                t[i][j] = 0
            }
        }   
    }

    for(let i = 1; i < n+1; i++){
        for(let j = 1; j < n+1; j++){
            if(nStr[i-1] == nStr[j-1] && i !== j){
                t[i][j] = 1+t[i-1][j-1]
            } else {
                t[i][j] = Math.max(t[i-1][j], t[i][j-1])
            }
        }
    }
    console.log(t);
    return t[n][n]
}

let nStr = "AABEBCDD";
let n = nStr.length;
console.log(longestCommonSeq(nStr, n));