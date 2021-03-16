def findSpecificPattern(Dict, pattern):
    #Code here
    # pattern init in hashMap
    pattMap = {}
    s = ""
    key = 0
    for i in range(len(pattern)):
        if pattern[i] not in pattMap:
            pattMap[pattern[i]] = key
            key += 1
            s += str(i)
        else:
            s += str(pattMap[pattern[i]])
    pattMap[pattern] = s

    # check each dict element compare from pattern
    for i in range(len(Dict)):
        dictMap = {}
        s = ""
        key = 0
        for j in range(len(Dict[i])):
            if Dict[i][j] not in dictMap:
                dictMap[Dict[i][j]] = key
                key += 1
                s += str(j)
            else:
                s += str(dictMap[Dict[i][j]])
        dictMap[Dict[i]] = s
        if pattMap[pattern] == dictMap[Dict[i]]:
            print(Dict[i], end=" ")





Dict = ["abb", "abc","xyz","xyy"]
pattern = "foo"
findSpecificPattern(Dict, pattern)