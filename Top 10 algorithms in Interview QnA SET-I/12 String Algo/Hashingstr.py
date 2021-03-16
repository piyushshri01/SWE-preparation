def HashingStr():
    s="ababab"
    arr = []
    for _ in range(26):
        arr.append(0)
    for i in range(len(s)):
        arr[ord(s[i]) - ord("a")]+= 1
    print(arr)
HashingStr()