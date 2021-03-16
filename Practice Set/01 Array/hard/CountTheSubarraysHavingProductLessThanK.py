def CountTheSubarraysHavingProductLessThanK(a,n,k):
    count = 0
    for i in range(n):
        prod = 1
        for j in range(i, n):
            prod *= a[j]
            if prod < k:
                count += 1
    print(count)



arr = [1,2,3,4]
n = len(arr)
k = 10
CountTheSubarraysHavingProductLessThanK(arr,n,k)