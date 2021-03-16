def containerWithMostWater(A, le):
    hi = 0
    i = 0
    j = le-1
    while i < j:
        area = (j-i) * min(A[i], A[j])
        if hi < area:
            hi = area
        if A[i] < A[j]:
            i += 1
        else:
            j -= 1
    print(hi)
A = [1,5,4,3]
le = len(A)
containerWithMostWater(A, le)