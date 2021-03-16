def nonrepeatingCharacter(s):
    #code here
    hashTbl = {}
    for i in range(len(s)):
        if s[i] not in hashTbl:
            hashTbl[s[i]] = 1
        else:
            hashTbl[s[i]] += 1
            
    #  traverse str for checking first non-repeating chr
    for i in range(len(s)):
        if hashTbl[s[i]] == 1:
            return s[i]
    return -1
s = "zxvczbtxyzvy"#"hello"
print(nonrepeatingCharacter(s))