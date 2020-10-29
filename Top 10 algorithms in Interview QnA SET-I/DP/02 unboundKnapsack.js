function unboundKnapsack(valArr, wtArr, w, n){
    // drive table
    let t = []
    for(let i = 0; i < n+1; i++){
        t[i] = []
        for(let j = 0; j < w+1; j++){
            if(i == 0 || j == 0){
                t[i][j] = 0
            }
        }
    }

    // main logic
    for(let i = 1; i < n+1; i++){
        for(let j = 1; j < w+1; j++){
            if(w >= wtArr[i-1]){
                t[i][j] = Math.max(valArr[i-1] + t[i][j-wtArr[i-1]], t[i-1][j])
            }
            else if( w < wtArr[i-1]){
                t[i][j] = t[i-1][j]
            }
        }
    }
    console.log(t);
    return t[n][w]
}
let valArr = [1,30] //[60, 100, 120]
let weightArr =  [1, 50]//[10, 20, 30]
let weight = 100 //50;
let n = valArr.length;
console.log(unboundKnapsack(valArr, weightArr, weight, n));