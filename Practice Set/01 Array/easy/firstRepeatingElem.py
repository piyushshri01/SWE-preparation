# o/p will be according to indexing(index will be 1 to n)
def firstRepeatingElem(arr, n):
    mp = {}
    for i in range(n):
        if arr[i] not in mp:
            mp[arr[i]] = 1
        else:
            mp[arr[i]] += 1
    for i in range(n):
        if mp[arr[i]] > 1:
            return i+1
    return -1

a = [1, 5, 3, 4, 3, 5, 6]
n = len(a)
print(firstRepeatingElem(a, n))