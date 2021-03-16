def rearrange(arr, n): 
    ##Your code here
    i = 0
    j = n-1
    a = []
    for _ in range(n):
        a.append(0)
    k = 0
    while i < j:
        a[k]   = arr[j]
        a[k+1] = arr[i]
        k+=2
        i+=1
        j-=1
    if i == j:
        a[k] = arr[j]
    for i in range(n):
        arr[i] = a[i]
    print(arr)
arr = [1,2,3,4,5,6] #[10,20,30,40,50,60,70,80,90,100,110]
n = len(arr)
rearrange(arr, n)