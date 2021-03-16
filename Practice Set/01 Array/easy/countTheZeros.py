import math

def countZeroes(arr, n):
    # code here
    start = 0
    end = n-1
    while start <= end:
        mid = math.floor(start+(end-start)/2)
        if ((mid == 0 or arr[mid-1] == 1) and arr[mid] == 0):
            return mid
        elif arr[mid] == 1:
            start = mid+1
        else:
            end = mid-1
    return -1
# arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]
arr = [1,0]
n = len(arr)
res = countZeroes(arr, n)
if res != -1:
    print(n-res)
else:
    print(0)