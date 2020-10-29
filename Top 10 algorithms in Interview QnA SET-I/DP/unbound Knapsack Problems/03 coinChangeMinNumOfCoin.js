function coinChange(coinArr, sum, n){
    // draw table
    let t = []
    for(let i= 0; i < n+1; i++){
        t[i] = []
        for(let j= 0; j < sum+1; j++){
            if(i == 0 ){
                t[i][j] = Infinity
            }
            if(j == 0){
                t[i][j] = 0
            }
            if(i == 0 && j== 0){
                t[i][j] = 0
            }
            
        }
    }

    // main logic
    for(let i= 1; i < n+1; i++){
        for(let j= 1; j < sum+1; j++){
          if(coinArr[i-1] <= j){
            t[i][j] = Math.min(t[i][j-coinArr[i-1]] + 1, t[i-1][j])
          } else if(coinArr[i-1] > j){
              t[i][j] = t[i-1][j]
          }
        }
    } 
    console.log(t);
    return t[n][sum]  
}


let coinArr = [9, 6, 5, 1] //[25, 10, 5] //[1, 2, 10]
let sum = 11 //30 //5
let n = coinArr.length;
console.log(coinChange(coinArr, sum, n));