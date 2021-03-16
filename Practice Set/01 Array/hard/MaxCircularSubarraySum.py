# Kadane algoritham
def kadane(a):
    n = len(a)
    max = -1000000007
    sum = 0
    i = 0
    while i < n:
        sum += a[i]
        if sum > max:
            max = sum
        if sum < 0:
            sum = 0
        i+=1
    return max

# max circular subArr sum method
def MaxCircularSubarraySum(a, n):
    # Case 1: get the maximum sum using standard kadane's
    # algorithm
    max_kadane = kadane(a)
    # print(max_kadane)
    # Case 2: Now find the maximum sum that includes corner
    # elements.
    max_wrap = 0
    for i in range(0, n):
        max_wrap += a[i]
        a[i] = -a[i]

    # Max sum with corner elements will be:
    # array-sum - (-max subarray sum of inverted array)
    max_wrap = max_wrap + kadane(a)

    # The maximum circular sum will be maximum of two sums
    if max_wrap <= 0 and max_kadane <= 0:
        if max_kadane > max_wrap:
            return max_wrap
        else:
            return max_kadane
    if max_wrap > max_kadane:
        return max_wrap
    else:
        return max_kadane

arr = [10,-3,-4,7,6,5,-4,-1]
n = len(arr)
print(MaxCircularSubarraySum(arr, n))

