def barcketNumbers(S):
    # code here
    OpenBracketCount = 0
    st = []
    res = []
    for i in range(len(S)):
        if S[i] == "(":
            OpenBracketCount += 1
            st.append(OpenBracketCount)
            res.append(OpenBracketCount)
        elif S[i] == ")":
            removeElem = st.pop()
            res.append(removeElem)
    return res
S = "(aa(bdc))p(dee)â€‹" #"(((()("
print(barcketNumbers(S))