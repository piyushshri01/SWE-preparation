def getNthUglyNo(n):
    # code here
    # init i2 i3 i5 (countting of 2, 3, 5)
    i2 = 0
    i3 = 0
    i5 = 0
    
    # initial value of multiples is 2 3 5
    next_mul_of_2 = 2
    next_mul_of_3 = 3
    next_mul_of_5 = 5
    
    # stores ugly numbers
    uglyNum = [0]*n
    # initial ugly num is 1 (given in ques)
    uglyNum[0] = 1
    # traverse arr 1 to n
    for i in range(1, n):
        uglyNum[i] = min(next_mul_of_2,next_mul_of_3,next_mul_of_5)
        
        # check if uglyNum[i] == next_mul_of_2 then increment i2 and assign next_mul_of_2 = uglyNum[i2]*2
        if uglyNum[i] == next_mul_of_2:
            i2 += 1
            next_mul_of_2 = uglyNum[i2]*2
        # check if uglyNum[i] == next_mul_of_3 then increment i3 and assign next_mul_of_3 = uglyNum[i3]*3
        if uglyNum[i] == next_mul_of_3:
            i3 += 1
            next_mul_of_3 = uglyNum[i3]*3
        # check if uglyNum[i] == next_mul_of_5 then increment i5 and assign next_mul_of_5 = uglyNum[i5]*5
        if uglyNum[i] == next_mul_of_5:
            i5 += 1
            next_mul_of_5 = uglyNum[i5]*5
    print(uglyNum[-1])
n = 10
getNthUglyNo(n)