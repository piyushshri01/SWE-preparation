def ExtendedRabinKarp():
    s = "aaaaab"
    find = "aab"
    alpha = "abcdefghijklmnopqrstuvwxyz"
    hashMap = {}
    for i in range(len(alpha)):
        hashMap[alpha[i]] = i+1
    hashCodeFind = 0
    # make a single count of find str
    m = len(find)
    for i in range(len(find)):
        res = hashMap[find[i]]*pow(26, m-1)
        m-=1
        hashCodeFind += res
    i = 0
    j = 0
    sum = 0
    # via sliding window
    m = len(find)
    constPow = m-1
    while j < len(s):
        if j-i+1 < len(find):
            sum += hashMap[s[j]]*pow(26, m-1)
            m-=1
            j+=1
        elif j-i+1 == len(find):
            sum += hashMap[s[j]]*pow(26, 0)
            if hashCodeFind == sum:
                print(i, j)
                return
            sum = (sum - hashMap[s[i]]*pow(26, constPow))*26
            i+=1
            j+=1
    print("Pattern does not exist")
    return
ExtendedRabinKarp()