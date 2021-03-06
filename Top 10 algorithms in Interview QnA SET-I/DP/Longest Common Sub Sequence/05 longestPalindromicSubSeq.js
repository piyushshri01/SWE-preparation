// top down approach
function longestPalindromicSubSeq(nStr, mStr, n, m){
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
let nStr = "agbcba";
// need one more string to getting longest common sub sequence
let splitString = nStr.split("")
let reverseArray = splitString.reverse(); 
let joinArray = reverseArray.join("");

// assign to mStr for only understanding purpose
let mStr = joinArray;
let n = nStr.length;
let m = mStr.length;
// get longest common sub sequence
console.log(longestPalindromicSubSeq(nStr, mStr, n, m));