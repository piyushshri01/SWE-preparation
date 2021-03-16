from collections import defaultdict
def sortByFreq(A, n):
    # sol. 1
    # create map with count element
    # after that insert map element in heap
    # then pop element and heapifiy
    # 
    # method 1 
    # arr = []
    # for i in range(n):
    #     arr.append(A[i])
    # A.sort()
    # # make a 2D array idx and count
    # matrix = [[], []]
    # i = 0
    # match = A[i]
    # count = 1
    # for i in range(1,n):
    #     if A[i] == match:
    #         count += 1
    #         match = A[i]
    #     else:
    #         matrix[0].append(match)
    #         matrix[1].append(count)
    #         count = 1
    #         match = A[i]
    # matrix[0].append(match)
    # matrix[1].append(count)
    
    # method 2
    # arr -> Array to be sorted
    # n   -> Length of Array
 
    # d is a hashmap(referred as dictionary in python)
    d = defaultdict(lambda: 0)
    for i in range(n):
        d[arr[i]] += 1
 
    # Sorting the array 'arr' where key
    # is the function based on which
    # the array is sorted
    # While sorting we want to give
    # first priority to Frequency
    # Then to value of item
    print(d)
    arr.sort(key=lambda x: (-d[x], x))
 
    print(arr)

arr = [5,5,4,6,4]
n = len(arr)
sortByFreq(arr, n)