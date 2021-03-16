def stockSpan(price, N):
    # brute force O(n^2)
    # resArr = []
    # for _ in range(N):
    #     resArr.append(0)
    # resArr[0] = 1
    # i = 1
    # while i < N:
    #     j = i-1
    #     count = 0
    #     while j >= 0:
    #         if price[i] >= price[j]:
    #             count+=1
    #             j-=1
    #         else:
    #             break
    #     resArr[i] = count+1
    #     i+=1
    # print(resArr)

    # Opt. approach O(N) GFG
    st = []  
    st.append(0) 
  
    S = []
    for _ in range(N):
        S.append(0)
    # Span value of first element is always 1 

    S[0] = 1
  
    # Calculate span values for rest of the elements 
    for i in range(1, N): 
          
        # Pop elements from stack whlie stack is not 
        # empty and top of stack is smaller than price[i] 
        while( len(st) > 0 and price[st[-1]] <= price[i]): 
            st.pop() 
  
        # If stack becomes empty, then price[i] is greater 
        # than all elements on left of it, i.e. price[0], 
        # price[1], ..price[i-1]. Else the price[i] is 
        # greater than elements after top of stack 
        S[i] = i + 1 if len(st) <= 0 else (i - st[-1]) 
  
        # Push this element to stack 
        st.append(i)
    print(S)

price = [100, 80, 60, 70, 60, 75, 85] #[10 ,4 ,5 ,90 ,120 ,80]
N = len(price)
stockSpan(price, N)