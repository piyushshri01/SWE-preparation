def isPlaindrome(S):
    # code here
    i = 0
    j = len(S)-1
    while i < j:
        if S[i] == S[j]:
            i += 1
            j -= 1
        else:
            return 0
    return 1
S = "abba"
print(isPlaindrome(S))