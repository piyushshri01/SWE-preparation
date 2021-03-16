TC = int(input())
for _ in range(TC):
    N, M = input().split(" ")
    N = int(N)
    M = int(M)
    A = list(map(int, input().split()))[:N]
    B = list(map(int, input().split()))[:M]
    hashMap = {}
    # init sencond arr in dict.
    for i in range(len(B)):
        hashMap[B[i]] = True
    # traverse first arr if element is not present in hashMap then print 
    for i in range(len(A)):
        if A[i] not in hashMap:
            print(A[i], end=" ")
    print(end="\n")