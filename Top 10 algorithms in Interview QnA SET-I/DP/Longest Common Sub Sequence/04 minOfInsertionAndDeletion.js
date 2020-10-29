// top down approach
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
    return t[n][m]
}

let nStr = "heap";
let mStr = "pea" ;
let n = nStr.length;
let m = mStr.length;
// console.log(longestCommonSeq(nStr, mStr, n, m));

// deletion res
let delRes = n - longestCommonSeq(nStr, mStr, n, m);

// insertion res
let insRes = m - longestCommonSeq(nStr, mStr, n, m);

// o/p
console.log(`convert an string a to b needs to ${delRes} Deletion and ${insRes} Insertion operation`);