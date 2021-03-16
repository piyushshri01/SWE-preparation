def celebrity(M, n):
    # code here 
    allCelb = True
    res = -1
    for i in range(n):
        count = 0
        for j in range(n):
            if M[i][j] == 1:
                allCelb = False
                break
            else:
                count += 1
        if count == n:
            res = i
    if not allCelb:
        return res
    else:
        return -1
# M = [[0, 1, 0],
#      [0, 0, 0], 
#      [0, 1, 0]] 
# M = [[0, 0, 0],
#      [0, 0, 0], 
#      [0, 0, 0]]
M = [[0, 0, 0, 0, 0],
     [1, 0, 0, 0, 0], 
     [0, 0, 0, 0, 1],
     [0, 0, 1, 0, 0],
     [0, 1, 0, 0, 0]]
n = len(M)         
print(celebrity(M, n))