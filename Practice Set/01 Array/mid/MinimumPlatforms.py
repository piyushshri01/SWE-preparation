def MinimumPlatforms(arr, dep, n):
    # 1st sol O(n^2)
    # platNeeded = 1
    # result = 1
    # i = 1
    # j = 0
    
    # for i in range(0, n):
    #     platNeeded = 1
        
    #     for j in range(i+1, n):
    #         if ((arr[i] >= arr[j] and arr[i] <= dep[j]) or (arr[j] >= arr[i] and arr[j] <= dep[i])):
    #             platNeeded += 1
        
    #     result = max(result, platNeeded)
    # return result

    #  2nd sol O(N)
    # Sort arrival and
    # departure arrays
    arr.sort()
    dep.sort()
 
    # plat_needed indicates
    # number of platforms
    # needed at a time
    plat_needed = 1
    result = 1
    i = 1
    j = 0
 
    # Similar to merge in
    # merge sort to process 
    # all events in sorted order
    while (i < n and j < n):
        # If next event in sorted
        # order is arrival, 
        # increment count of
        # platforms needed
        if (arr[i] <= dep[j]):
            plat_needed+= 1
            i+= 1 
        # Else decrement count
        # of platforms needed
        elif (arr[i] > dep[j]):
            plat_needed-= 1
            j+= 1

        # Update result if needed 
        if (plat_needed > result): 
            result = plat_needed    
            
    print(result)

Arr= [900, 940, 950, 1100, 1500, 1800]
Dep = [910, 1200, 1120, 1130, 1900, 2000]
n = len(Arr)
MinimumPlatforms(Arr, Dep, n)