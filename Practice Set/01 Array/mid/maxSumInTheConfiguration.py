def max_sum(a,n):
    # O(n) solution GFG
        #code here
    # O(n) solution GFG
    cum_sum = 0
    
    for i in range(0, n):
        cum_sum += a[i] 

    # Compute sum of i * a[i] for 
    # initial configuration.
    curr_val = 0
    
    for i in range(0, n):
        curr_val += i * a[i] 

    # Initialize result
    res = curr_val 

    # Compute values for other iterations
    for i in range(1, n):
    
        # Compute next value using previous
        # value in O(1) time
        next_val = (curr_val - (cum_sum - a[i-1]) +
                                    a[i-1] * (n-1))
            # Update current value
        curr_val = next_val 

        # Update result if required
        res = max(res, next_val)
    
    print(res)
    # O(n^2) solution
    # max = 0
    # for i in range(n):
    #     max += (i*a[i])
    # for i in range(n-1):
    #     sum = 0
    #     i = n-1
    #     while i > 0:
    #         temp = a[i]
    #         a[i] = a[i-1]
    #         a[i-1] = temp
    #         i-=1
    #     for j in range(n):
    #         sum += (j*a[j])
    #     if sum > max:
    #         max = sum
    # print(max) 
a = [8,3,1,2]
n = 4
max_sum(a,n)