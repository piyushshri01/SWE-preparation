def anagram(a, b):
    #  case 1 if len of a and b is not same then return False
    if len(a) != len(b):
        return False
    # assign in hashMapA
    hashMapA = {}
    for i in range(len(a)):
        if a[i] not in hashMapA:
            hashMapA[a[i]] = 1
        else:
            hashMapA[a[i]] += 1
            
    # assign in hashMapB
    hashMapB = {}
    for i in range(len(b)):
        if b[i] not in hashMapB:
            hashMapB[b[i]] = 1
        else:
            hashMapB[b[i]] += 1
    # check both string char count is same or not
    # if not same return "No"
    # otherwise "Yes"
    for i in range(len(a)):
        if a[i] in hashMapB:
            if hashMapA[a[i]] != hashMapB[a[i]]:
                return False
        else:
            return False
    return True
a = "b"
b = "d"
print(anagram(a, b))