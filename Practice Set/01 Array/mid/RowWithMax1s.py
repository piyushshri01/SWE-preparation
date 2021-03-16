def RowWithMax1s(arr, n, m):
    max = 0
    idx = -1
    for i in range(n):
        count = 0
        for j in range(m):
            if arr[i][j] == 1:
                count += 1
        if count > max:
            max = count
            idx = i
    return idx

N = 4
M = 4
arr = [[0, 1, 1, 1],
           [0, 0, 1, 1],
           [1, 1, 1, 1],
           [0, 0, 0, 0]]
print(RowWithMax1s(arr, N, M))