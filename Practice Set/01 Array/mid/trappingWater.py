def trappingWater(arr,n):
    #Your code here
    left = [0]*n

    # Right [i] contains height of tallest bar to
    # the right of ith bar including itself
    right = [0]*n

    # Initialize result
    water = 0

    # Fill left array
    left[0] = arr[0]
    for i in range( 1, n):
        left[i] = max(left[i-1], arr[i])

    # Fill right array
    right[n-1] = arr[n-1]
    for i in range(n-2, -1, -1):
        right[i] = max(right[i + 1], arr[i])
    
    for i in range(0, n):
        water += min(left[i], right[i]) - arr[i]
    print(left)
    print(right)
    print(water)



arr = [3,0,0,2,0,4] #[6,9,9] #[7,4,0,9] #[8,8,2,4,5,5,1]
n = len(arr)
trappingWater(arr,n)