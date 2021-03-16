def removeDups(S):
    # code here
    hashMap = {}
    s = ""
    for i in range(len(S)):
        if S[i] not in hashMap:
            hashMap[S[i]] = True
            s += S[i]

    print(s)

S = "gfg" #"geeksforGeeks"
removeDups(S)