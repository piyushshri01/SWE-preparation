def merge(arr1, arr2, n, m): 
    # code here
    i = 0
    j = 0
    while (i < n and j < m):
        if arr1[i] < arr2[j]:
            i += 1
        else:
            temp = arr1[i]
            arr1[i] = arr2[j]
            arr2[j] = temp
            i += 1
            arr2.sort()
    print(arr1, arr2)
n = 4
m = 5
arr1 = [1, 3, 5, 7]
arr2 = [0, 2, 6, 8, 9]
print(merge(arr1, arr2, n, m))