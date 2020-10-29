function coinChange(coinArr, sum, n){
    // draw table
    let t = []
    for(let i= 0; i < n+1; i++){
        t[i] = []
        for(let j= 0; j < sum+1; j++){
            if(j == 0){
                t[i][j] = 1
            }
            if(i == 0){
                t[i][j] = 0
            }
        }
    }

    // main logic
    for(let i= 1; i < n+1; i++){
        for(let j= 1; j < sum+1; j++){
          if(coinArr[i-1] <= j){
              t[i][j] = t[i][j-coinArr[i-1]] + t[i-1][j]
          } else if(coinArr[i-1] > j){
              t[i][j] = t[i-1][j]
          }
        }
    } 
    console.log(t);
    return t[n][sum]  
}



let coinArr = [1, 2, 5]
let sum = 5
let n = coinArr.length;
console.log(coinChange(coinArr, sum, n));