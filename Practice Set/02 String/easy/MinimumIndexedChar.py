def printMinIndexChar(string,patt):
    #return required char
    hashMap = {}
    for i in range(len(string)):
        if string[i] not in hashMap:
            hashMap[string[i]] = i
    minIdx = 1000000007  
    flag = False
    for i in range(len(patt)):
        if patt[i] in hashMap:
            if minIdx > hashMap[patt[i]]:
                minIdx = hashMap[patt[i]]
                flag = True
    if flag:
        print(string[minIdx])
    else:
        print("$")


string = input()
patt = input()
printMinIndexChar(string,patt)