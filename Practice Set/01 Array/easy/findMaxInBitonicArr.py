import math

def findMaximum(arr, n):
    # code here
    start = 0
    end = n-1
    while start <= end:
        if (start == end):  
            return arr[start]  
      
        # If there are two elements and first is greater then  
        # the first element is maximum 
        if ((end == start + 1) and arr[start] >= arr[end]):
            return arr[start]  
        
        # If there are two elements and second is greater then  
        # the second element is maximum 
        if ((end == start + 1) and arr[start] < arr[end]):  
            return arr[end]

        mid = math.floor(start+(end-start)/2)
        if arr[mid] > arr[mid-1] and arr[mid] > arr[mid+1]:
            print(arr[mid])
            return
        elif arr[mid] > arr[mid+1] and arr[mid] < arr[mid-1]:
            end = mid-1
        else:
            start = mid+1

arr =  [1,15,25,45,42,21,17,12,11] #[1, 45, 47, 50, 5]
n = len(arr)
findMaximum(arr, n)