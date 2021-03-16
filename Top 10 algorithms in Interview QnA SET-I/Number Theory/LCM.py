import math
# Either LCM = a*b/HCF or this method
def LCM(a,b):
    N = max(a,b)
    # N = math.floor(pow(maxNum, 1/2))
    i = 2
    res = 1
    while i <= N:
        if a%i == 0 and b%i == 0:
            a = (a/i)
            b = (b/i)
            res*= i
        elif a%i == 0 or b%i == 0:
            if a%i == 0 and a > 0:
               a = (a/i) 
               res*= i
            elif b%i == 0 and b > 0:
                b = (b/i)
                res*= i
            else:
                i+=1
        else:
            i+=1
    print(res)

a,b = input().split(" ")
LCM(int(a), int(b))