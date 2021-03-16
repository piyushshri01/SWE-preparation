def reverseWords(Str):
    s = ""
    i = 0
    j = len(Str)-1
    str1 = ""
    while i <= j:
        if Str[j] != ".":
            str1 = Str[j] + str1
        else:
            s = s+ str1 + Str[j]
            str1 = ""
        j -= 1
    s += str1
    return s
        

S = input()
print(reverseWords(S))