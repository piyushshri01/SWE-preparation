import math

def easeTheArr(arr, n):
    # code here
    start = 0
    end = n-1
    while start <= end:
        if (start == end):  
            return start 
      
        # If there are two elements and first is greater then  
        # the first element is maximum 
        if ((end == start + 1) and arr[start] >= arr[end]):
            return start  
        
        # If there are two elements and second is greater then  
        # the second element is maximum 
        if ((end == start + 1) and arr[start] < arr[end]):  
            return end

        mid = math.floor(start+(end-start)/2)
        if arr[mid] > arr[mid-1] and arr[mid] > arr[mid+1]:
            return mid
        elif arr[mid] > arr[mid+1] and arr[mid] < arr[mid-1]:
            end = mid-1
        else:
            start = mid+1
    return 0
arr = [1,2,3]
n = len(arr)
print(easeTheArr(arr, n))