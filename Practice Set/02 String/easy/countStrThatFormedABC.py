def countStrThatFormedABC(dp,n, b, c):
    # base cases
    if (b < 0 or c < 0):
        return 0
    if (n == 0):
        return 1
    if (b == 0 and c == 0):
        return 1
    if (dp[n][b][c] != -1):
        return dp[n][b][c]
        
    res = countStrThatFormedABC(dp,n-1, b, c)
    res += countStrThatFormedABC(dp,n-1, b-1, c)
    res += countStrThatFormedABC(dp,n-1, b, c-1)
    
    dp[n][b][c] = res
    return dp[n][b][c]
    
Tc = input()
Tc = int(Tc)
for _ in range(Tc):
    n = input()
    n = int(n)
    bCount = 1
    cCount = 2
    dp = [ [ [-1 for x in range(n)] for y in range(3)]for z in range(4)]
    print(dp)
    print(countStrThatFormedABC(dp, n, bCount, cCount))
    print(dp)