import math

# O(n log lon(n))
def seiveOfErathosthenes():
    # make seive of n inputs
    N = 5000001
    seive = []
    for _ in range(N+1):
        seive.append(True)
    #  logic of make prime
    seive[0] = False
    seive[1] = False
    i = 2
    while i*i <= N:
        if seive[i] == True:
            j = i * i
            while j <= N:
                seive[j] = False
                j = j+i
        i+=1
    # count prime number in n range
    prime = []
    for i in range(N+1):
        if seive[i] == True:
            prime.append(i)
    return prime

# divisor count
def DivisorCount():
    N = int(input())
    primeArr = seiveOfErathosthenes()
    MOD = 1000000007
    res = 1
    i = 0
    while (primeArr[i]<=N):
        j = primeArr[i]
        powCount = 0
        while (N/j != 0):
            powCount = (powCount+math.floor(N/j))%MOD
            j = j*primeArr[i]
        res = (res *((powCount+1) %MOD))%MOD
        i+=1
    print(res)
DivisorCount()
