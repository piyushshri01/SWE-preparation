def findSmallest(arr, n):
    # code here
    res = 1
    for i in range(n):
        if arr[i] <= res:
            res += arr[i]
        else:
            break
    return res
arr = [1,2,3]
n = len(arr)
print(findSmallest(arr, n))