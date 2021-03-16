# to Change
def toChange(p, q, r):
    x1 = q[0]-p[0]
    y1 = q[1]-p[1]
    x2 = r[0]-q[0]
    y2 = r[1]-q[1]
    value = x1*y2-y1*x2
    return value > 0

# convex hull
def convexHull(Points, n):
    hull = []
    #  left most point
    left = 0
    for i in range(1, n):
        if Points[i][0] < Points[left][0]:
            left = i
    p = left
    # first point push in hull (left most point)
    while True:
        hull.append(Points[p])
        q = (p+1)%n

        for i in range(n):
            if toChange(Points[p], Points[q], Points[i]):
                q = i
        p = q
        if p==left:
            break
    # print hull points
    for i in range(len(hull)):
        print(hull[i][0], hull[i][1])

Points = [[0,4], [1,1], [2,2], [4,0], [4,4], [0,0], [3,3]]
n = len(Points)
convexHull(Points, n)