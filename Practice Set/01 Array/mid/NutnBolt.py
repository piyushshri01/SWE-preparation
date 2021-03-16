def matchPairs(nuts, bolts, n):
    # code here
    hashMap = {"!": 1, "#":2, "$":3, "%":4, "&":5, "*":6, "@":7, "^":8, "~":9}
    chrArr = []
    for _ in range(10):
        chrArr.append(0)
    for i in range(n):
        chrArr[hashMap[nuts[i]]] = nuts[i]
    j = 0
    for i in range(len(chrArr)):
        if chrArr[i] != 0:
            nuts[j] = chrArr[i]
            bolts[j] = chrArr[i]
            j+=1
    print(nuts)
    print(bolts)
nuts = ["@", "%", "$", "#", "^"]
bolts = ["%", "@", "#", "$", "^"]
n = len(nuts)
matchPairs(nuts, bolts, n)