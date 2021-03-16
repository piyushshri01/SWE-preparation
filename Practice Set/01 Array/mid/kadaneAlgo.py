def maxSubArraySum(a,size):
    ##Your code here
    max = -1000000007
    sum = 0
    i = 0
    while i < size:
        sum += a[i]
        if sum > max:
            max = sum
        if sum < 0:
            sum = 0
        i+=1
    print(max)
    # max_so_far = a[0]
    # curr_max =  a[0]
    
    # for i in range(1,size):
    #     curr_max = max(a[i], curr_max + a[i])
    #     max_so_far = max(max_so_far,curr_max)
        
    # print(max_so_far)
a = [-4,-2,-3,-1]
size = len(a)
maxSubArraySum(a,size)