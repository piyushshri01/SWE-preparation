import math

def countZeroes(arr, n):
    # code here
    start = 0
    end = n-1
    while start <= end:
        mid = math.floor(start+(end-start)/2)
        if ((mid == 0 or arr[mid-1] == 0) and arr[mid] == 1):
            return mid
        elif arr[mid] == 1:
            end = mid-1
        else:
            start = mid+1
    return -1
# arr = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
arr = [0,0]
arr = [1,1,1,1]
n = len(arr)
print(countZeroes(arr, n))