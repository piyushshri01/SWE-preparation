import math

def idxOfAnExtraElem():
    low = 0
    hi = len(b) - 1
    resIdx = len(b)
    while low <= hi:
        mid = math.floor(low+(hi-low)/2)
        if a[mid] == b[mid]:
            low = mid+1
        else:
            hi = mid-1
            resIdx = mid
    return resIdx
a = [2, 4, 6, 8, 10, 12, 13]
b = [2, 4, 6, 8, 10, 12]
n = len(b)
idxOfAnExtraElem()