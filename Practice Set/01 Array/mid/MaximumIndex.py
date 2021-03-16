def MaximumIndex(arr, n):
    #  O(n^2)
    i = 0
    res = 0
    diff = 0
    while i < n:
        j = i+1
        while j < n:
            if arr[i] <= arr[j]:
                diff = j-i
            if diff > res:
                res = diff
            j += 1
        i += 1
    print(res)

    # O(n)
    # i = 0
    # j = n-1
    # diff = 0
    # res = 0
    # while i < j:
    #     if arr[i] <= arr[j]:
    #         diff = j-i
    #         if diff > res:
    #             res = diff
    #         i += 1
    #     else:
    #         j -= 1
    # print(res)
        


A = [34, 8, 10, 3, 2, 80, 30, 33, 1]
N = len(A)
MaximumIndex(A, N)