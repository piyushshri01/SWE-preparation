def SubarraysWithEqual1sAnd0s(arr, n):
    hashTbl = {0: 1}
    s = 0
    #  create newArr of n size 
    newArr = []
    for i in range(n):
        newArr.append(0)

    #  traverse arr
    if arr[0] == 0:
        hashTbl[-1] = 1
        newArr[0] = -1
    else:
        hashTbl[1] = 1
        newArr[0] = 1

    for i in range(1,n):
        if arr[i] == 0:
            newArr[i] += (newArr[i-1] + (-1))
            if newArr[i] in hashTbl:
                s += hashTbl[newArr[i]]
                hashTbl[newArr[i]] += 1
            else:
                hashTbl[newArr[i]] = 1
        else:
            newArr[i] += (newArr[i-1] + (1))
            if newArr[i] in hashTbl:
                s += hashTbl[newArr[i]]
                hashTbl[newArr[i]] += 1
            else:
                hashTbl[newArr[i]] = 1
            
    print(s)

arr = [1,0,0,1,0,1,1]
# arr = [0,0,1,0,1,0,1,1,0,0,1,1,1]
n = len(arr)
SubarraysWithEqual1sAnd0s(arr, n)