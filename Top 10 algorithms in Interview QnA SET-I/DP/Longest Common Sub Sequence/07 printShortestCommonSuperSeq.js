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
    // return t[n][m]
    // return res;
    let resStr = []
    let i = n; let j = m;
    while(i > 0 && j > 0){
        if(nStr[i-1] == mStr[j-1]){
            resStr.unshift(nStr[i-1]);
            i--;
            j--;
        } else if(t[i][j-1] < t[i-1][j]){
            resStr.unshift(nStr[i-1]);
            i--;
        } else { //else if(t[i][j-1] > t[i-1][j])
            resStr.unshift(mStr[j-1]);
            j--;
        }
    }
    while(i > 0){
        resStr.unshift(nStr[i-1]);
        i--;
    }
    while(j > 0){
        resStr.unshift(mStr[j-1]);
        j--;
    }
    return resStr;
}

let nStr ="acbcfzxq" //"AGGTAB"  // "acbcfzxq" //"abcdgh";
let mStr ="abcdaf" //"GXTXAYB" // "abcdaf" //"aedfhr";
let n = nStr.length;
let m = mStr.length;
console.log(longestCommonSeq(nStr, mStr, n, m));