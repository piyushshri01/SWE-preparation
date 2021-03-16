def KmpSearch(S, P):
    M = len(S)
    N = len(P)
    lps = [0]*N
    computeLpsArr(P, N, lps)
    print(lps)
    i = 0
    j = 0
    while i < M:
        if S[i] == P[j]:
            i += 1
            j += 1
        else:
            if j != 0:
                j = lps[j-1]
            else:
                i += 1
        if j == N:
            print(i-j, (i-1))
            j = lps[j-1]


def computeLpsArr(P, N, lps):
    j = 0
    i = 1
    lps[0] = 0
    while i < N:
        if P[j] == P[i]:
            lps[i] = j+1
            j += 1
            i += 1
        else:
            if j != 0:
                j = lps[j-1]
            else:
                lps[i] = 0
                i += 1

S = input()
P = input()
KmpSearch(S, P)