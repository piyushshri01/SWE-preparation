def countWords(List, n):
    #code here
    hashMap = {}
    for i in range(n):
        if List[i] not in hashMap:
            hashMap[List[i]] = 1
        else:
            hashMap[List[i]] += 1
    
    #  traverse hashMap and check if List of i present in hashmap twice then print element
    for key in hashMap:
        if hashMap[key] == 2:
            print(key, end = " ")



List = ["Geeks", "For", "Geeks"]
n = len(List)
countWords(List, n)