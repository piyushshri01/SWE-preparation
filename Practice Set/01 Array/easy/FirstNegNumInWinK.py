#code
def FirstNegNumInWinK():
    TC = int(input())
    for _ in range(TC):
        n = int(input())
        arr = list(map(int, input().split()))[:n]
        k = int(input())
        # logic sliding window
        dq = []
        for i in range(k):
            if arr[i] < 0:
                dq.append(i)
                
        for i in range(k, n):
            # if in dq does not exist any -ve num then print 0 else print dq popped element 
            if len(dq) < 1:
                print(0, end=' ')
            else:
                print(arr[dq[0]], end=' ')
            # popped out next out of window -ve num 
            while len(dq) > 0 and dq[0] <= (i-k):
                dq.pop(0)
            # if negative num exists then push in dq    
            if arr[i] < 0:
                dq.append(i)
        
        # if dq is not empty then last window element exists else print 0
        if len(dq) < 1:
            print(0)
        else:
            print(arr[dq[0]])
FirstNegNumInWinK()           
