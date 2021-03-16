def spirallyTraverse(matrix, r, c): 
    # code here 
    k = 0
    l = 0
    while k < r and l < c:
        # print first row
        for i in range(l, c):
            print(matrix[k][i], end=" ")

        k += 1
        # print last col
        for i in range(k, r):
            print(matrix[i][c - 1], end=" ")

        c -= 1
        # print last row
        if (k < r):

            for i in range(c - 1, (l - 1), -1):
                print(matrix[r - 1][i], end=" ")

            r -= 1
        # print fir col
        if (l < c):
            for i in range(r - 1, k - 1, -1):
                print(matrix[i][l], end=" ")

            l += 1



matrix = [[1, 2, 3, 4],
           [5, 6, 7, 8],
           [9, 10, 11, 12],
           [13, 14, 15,16]]
r = 4
c = 4
spirallyTraverse(matrix, r, c)