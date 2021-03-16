def merge(A, B):
    i = 0
    j = 0
    newArr = []
    while i < len(A) and j < len(B):
        if A[i] < B[j]:
            newArr.append(A[i])
            i+=1
        else:
            newArr.append(B[j])
            j+=1
    while i < len(A):
        newArr.append(A[i])
        i+=1
    while j < len(B):
       newArr.append(B[j])
       j+=1 
    return newArr
def mergeKsortedArr(arr, k):
    resArr = []
    for i in range(k):
       resArr = merge(resArr, arr[i])
    print(resArr)

arr = [[1,2,3],[4,5,6],[7,8,9]]
k = len(arr)
mergeKsortedArr(arr, k)
