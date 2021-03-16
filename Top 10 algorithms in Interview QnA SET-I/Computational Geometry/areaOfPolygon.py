class Polygon():
    def __init__(self):
        self.PointArr = []

    def insertPoint(self, x, y):
        self.PointArr.append([x,y])

    def polygonArea(self):
        length = len(self.PointArr)
        arr = self.PointArr
        fArea = 0
        for i in range(1,length-1):
            x1 = arr[i][0] - arr[0][0]
            y1 = arr[i][1] - arr[0][1]
            x2 = arr[i+1][0] - arr[0][0]
            y2 = arr[i+1][1] - arr[0][1]
            cross_p = x1*y2 - y1*x2
            fArea+=cross_p
        return abs(fArea/2)

polyArea = Polygon()
N = int(input())
for i in range(N):
    x, y = input().split(" ")
    polyArea.insertPoint(int(x),int(y))
Area = polyArea.polygonArea()
print(Area)