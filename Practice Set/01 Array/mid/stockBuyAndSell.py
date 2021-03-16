def stockBuySell(A, n):
    #code here
    if n == 1:
        return
    resArr = []
    i = 0
    while (i < (n-1)):
        # print(i)
        #  find local minima
        while ((i < (n-1)) and A[i+1] <= A[i]):
            i += 1
            
        if i == (n-1):
            break
        buy = i
        i += 1
        # find local maxima
        while ((i < n) and A[i] >= A[i-1]):
            i += 1
        sell = i-1
        resArr.append([buy, sell])
    return resArr




# count total profit
# def totalProfit(price, start, end):
#     if end <= start:
#         return 0
    
#     profit = 0
    
#     for i in range(start, end, 1):
#         for j in range(i+1, end+1):
#             if price[j] > price[i]:
#                 curr_Profit = price[j] - price[i] + totalProfit(price, start, i-1) + totalProfit(price, j+1, end)
#                 profit = max(profit, curr_Profit)
#     return profit
# def stockBuySell(A, n):
#     #code here
#     result = totalProfit(A, 0, n-1)
#     return result

		
# Driver code
A = [100,180,260,310,40,535,695] # (310-100) + (695-40) => 865
n = len(A)
print(stockBuySell(A, n))