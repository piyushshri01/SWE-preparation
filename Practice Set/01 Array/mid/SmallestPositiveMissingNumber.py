def SmallestPositiveMissingNumber(arr, n):
    arr.sort()
    res = 1
    for i in range(n):
        if arr[i] > 0 and arr[i] == res:
            res += 1
    print(res)

arr = [1,2,3,4,5] #[0,-10,1,3,-20] #[28, 7, -36, 21, -21, -50, 9, -32]
N = len(arr)
SmallestPositiveMissingNumber(arr, N)