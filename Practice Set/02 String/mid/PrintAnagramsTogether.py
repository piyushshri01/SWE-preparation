# method to check whether string is anagram or not
def AnagramStr(map, mapStr, cmpStr):
    if len(mapStr) == len(cmpStr):
        cmpMap = {}
        for j in range(len(cmpStr)):
            if cmpStr[j] not in cmpMap:
                cmpMap[cmpStr[j]] = 1
            else:
                cmpMap[cmpStr[j]] += 1
        
        for i in range(len(cmpStr)):
            if cmpStr[i] in map:
                if cmpMap[cmpStr[i]] != map[cmpStr[i]]:
                    return False
            else:
                return False
    else:
        return False
    return True
# Print Anagram String Together
def Anagrams(words,n):
    res = []
    # make visited index hash map for record index is visited or not
    visitedIdx = {}
    for i in range(n):
        visitedIdx[i] = False

    # traverse whole list of words
    for i in range(n):
        map = {}
        if not visitedIdx[i]:
            # make idx into True
            visitedIdx[i] = True
            for j in range(len(words[i])):
                if words[i][j] not in map:
                    map[words[i][j]] = 1
                else:
                    map[words[i][j]] += 1
            # to check i+1 , i+2,...n str match with words[i] or not
            # create temp arr or append result
            temp = [words[i]]
            for k in range(i+1, n):
                if not visitedIdx[k]:
                    match = AnagramStr(map, words[i], words[k]) 
                    if match:
                        temp.append(words[k])
                        visitedIdx[k] = True
            #  append temp arr into res arr
            res.append(temp)
    return res          
words = ["no","on","is"] #["act","god","cat","dog","tac"]
n = len(words)
print(Anagrams(words,n))