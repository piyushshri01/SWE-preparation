def EquilibriumIdxOfAnArr(a,n):
    leftSum = 0
    arrSum = sum(a)
    for i in range(n):
        arrSum -= a[i]
        if leftSum == arrSum:
            return i
        leftSum += a[i]
    return -1
a = [1,3,5,2,2] #[1,1,1,1] #[1,2,0,3]
n = len(a)
print(EquilibriumIdxOfAnArr(a,n))