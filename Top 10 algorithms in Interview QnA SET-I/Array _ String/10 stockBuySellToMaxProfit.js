function stockBuySellToMaxProfit(price, start, end){
    // If the stocks can't be bought 
    if (end <= start) return 0; 
  
    // Initialise the profit 
    let profit = 0; 
  
    // The day at which the stock 
    // must be bought 
    for (let i = start; i < end; i++){
  
        // The day at which the 
        // stock must be sold 
        for (let j = i+1; j <= end; j++){
  
            // If byuing the stock at ith day and 
            // selling it at jth day is profitable 
            if (price[j] > price[i]){ 
                  
                // Update the current profit 
                curr_profit = price[j] - price[i] + 
                            stockBuySellToMaxProfit(price, start, i - 1)+
                            stockBuySellToMaxProfit(price, j + 1, end); 
  
                // Update the maximum profit so far 
                profit = Math.max(profit, curr_profit); 
            }
        }
    }  
    return profit;
}

let arr = [100, 180, 260, 310, 
    40, 535, 695];
console.log(stockBuySellToMaxProfit(arr, 0, arr.length-1));