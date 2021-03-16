def RabinKarp():
    s = "aaaaab"
    find = "aab"
    alpha = "abcdefghijklmnopqrstuvwxyz"
    hashMap = {}
    for i in range(len(alpha)):
        hashMap[alpha[i]] = i+1
    hashCodeFind = 0
    # make a single count of find str
    for i in range(len(find)):
        hashCodeFind += hashMap[find[i]]
    i = 0
    j = 0
    sum = 0
    while j < len(s):
        sum += hashMap[s[j]]
        if j-i+1 < len(find):
            j += 1
        elif j-i+1 == len(find):
            if hashCodeFind == sum:
                y = 0
                count = 0
                for x in range(i, j+1):
                    if find[y] == s[x]:
                        count+=1
                        y+=1
                    if count == len(find):
                        print(i, j)
                        return
            sum -= hashMap[s[i]]
            i+=1
            j+=1
    print("String of find does not exist in String s")
    return
RabinKarp()