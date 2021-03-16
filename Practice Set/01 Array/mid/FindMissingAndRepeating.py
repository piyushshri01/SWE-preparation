def findTwoElement(arr, n): 
    hashMap = {}
    repeat = -1
    missing = -1
    for i in range(n):
        if arr[i] not in hashMap:
            hashMap[arr[i]] = True
        else:
            repeat = arr[i]
    
    for i in range(1,n+1):
        if i not in hashMap:
            missing = i
            break
    print(repeat, missing)
arr = [1, 3, 3]
n = len(arr)
findTwoElement(arr, n)