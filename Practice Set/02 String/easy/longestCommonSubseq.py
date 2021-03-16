#  Recursive approach
# def longestCommonSubseq(x, y, m, n):
#     if m < 0 or n < 0:
#         return 0
#     if x[m] == y[n]:
#         return 1 + longestCommonSubseq(x, y, m-1, n-1)
#     else:
#         return max(longestCommonSubseq(x, y, m-1, n), longestCommonSubseq(x, y, m, n-1))

# x = "geeks"
# y = "eks"
# m = len(x)-1
# n = len(y)-1
# print(longestCommonSubseq(x, y, m, n))

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

x = "ancd" #"geeks"
y = "xycd" #"eks"
m = len(x)
n = len(y)
dp = []
for i in range(m+1):
    res = []
    for j in range(n+1):
        res.append(-1)
    dp.append(res)

print(longestCommonSubseq(dp, x, y, m-1, n-1))