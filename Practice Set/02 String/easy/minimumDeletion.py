# recursive dp optimize approach
def longestCommonSubseq(dp, x, y, m, n):
    if m < 0 or n < 0:
        return 0
    if dp[m][n] != -1:
        return dp[m][n]
    if x[m] == y[n]:
        dp[m][n] =  1 + longestCommonSubseq(dp, x, y, m-1, n-1)
    else:
        dp[m][n] = max(longestCommonSubseq(dp, x, y, m-1, n), longestCommonSubseq(dp, x, y, m, n-1))
    return dp[m][n]

def minimumDeletion(x, n):
    revStr = ""
    for i in range(n-1, -1, -1):
        revStr += x[i]
    dp = []
    for _ in range(n+1):
        res = []
        for _ in range(n+1):
            res.append(-1)
        dp.append(res)
    longestCommSeq = longestCommonSubseq(dp, x, revStr, n-1, n-1)
    minDel = n - longestCommSeq
    return minDel

Tc = input()
Tc = int(Tc)
for _ in range(Tc):
    str = input()
    n = len(str)
    print(minimumDeletion(str, n))