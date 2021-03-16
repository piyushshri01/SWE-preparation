def arrange(arr, n): 
    #Your code here
    # sol. 2 without using extra space

    # First step: Increase all values
    # by (arr[arr[i]] % n) * n
    for i in range(0, n):
        arr[i] += (arr[arr[i]] % n) * n

    # Second Step: Divide all values
    # by n
    for i in range(0, n):
        arr[i] = int(arr[i] / n)
    print(arr)
    # sol. 1 using extra space
    # a = []
    # for _ in range(n):
    #     a.append(0)
    # for i in range(n):
    #     a[i] = arr[arr[i]]
    # for i in range(n):
    #     arr[i] = a[i]
    # print(arr)

arr = [4,0,2,1,3] #[1,0]
n = len(arr)
arrange(arr, n)