def MaximumOfAllSubarraysOfSizeK(arr, n, k):
    qu = []
    for i in range(k):
        while qu and arr[i] >= arr[qu[-1]]:
            qu.pop()
        qu.append(i)

    for i in range(k, n):
        print(arr[qu[0]], end=" ")

        # Remove useless index 
        while qu and qu[0] <= i-k:
            qu.pop(0)

        # Remove useless elements
        while qu and arr[i] >= arr[qu[-1]]:
            qu.pop()
        qu.append(i)
    print(arr[qu[0]], end=" ")
        

arr = [1,2,3,1,4,5,2,3,6]
N = len(arr)
K = 3
MaximumOfAllSubarraysOfSizeK(arr, N, K)