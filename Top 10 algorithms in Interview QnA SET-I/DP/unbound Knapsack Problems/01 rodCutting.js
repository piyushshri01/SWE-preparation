function unboundKnapsack(priceArr, lenArr, len, n){
    // drive table
    let t = []
    for(let i = 0; i < n+1; i++){
        t[i] = []
        for(let j = 0; j < len+1; j++){
            if(i == 0 || j == 0){
                t[i][j] = 0
            }
        }
    }

    // main logic
    for(let i = 1; i < n+1; i++){
        for(let j = 1; j < len+1; j++){
            if(len >= lenArr[i-1]){
                t[i][j] = Math.max(priceArr[i-1] + t[i][j-lenArr[i-1]], t[i-1][j])
            }
            else if( len < lenArr[i-1]){
                t[i][j] = t[i-1][j]
            }
        }
    }
    console.log(t);
    return t[n][len]
}
let priceArr = [1, 30]
let lengthArr =  [1, 50]
let length = 100
let n = priceArr.length;
console.log(unboundKnapsack(priceArr, lengthArr, length, n));