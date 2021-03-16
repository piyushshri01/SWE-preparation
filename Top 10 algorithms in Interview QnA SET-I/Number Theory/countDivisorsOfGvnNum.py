# O(n log lon(n))
def seiveOfErathosthenes(N):
    # make seive of n inputs
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
    primeArr = seiveOfErathosthenes(N)
    res = 1
    for i in range(len(primeArr)):
        j = primeArr[i]
        powCount = 0
        while (N%j == 0):
            powCount+=1
            j = j*primeArr[i]
        res *= (powCount+1) 
    print(res)
DivisorCount()
