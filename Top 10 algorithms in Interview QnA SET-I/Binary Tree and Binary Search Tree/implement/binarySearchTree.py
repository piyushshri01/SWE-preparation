# Node class 
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

# BT
class BST:
    def __init__(self):
        self.root = None

    def insert(self, val):
        newNode = Node(val)
        if not self.root:
            self.root = newNode
            return
        else:
            p = self.root
            q = p
            newNode = Node(val)
            while p:
                if p.val > val:
                    q = p       
                    p = p.left  
                else:
                    q = p       
                    p = p.right 
            if q.val > val:
                q.left = newNode
                return
            else:
                q.right = newNode 
                return

    def create(self):
        val = int(input("Enter Root Node ") or "0")
        if not val or val == None or val == '' or val == bool or val == 0:
            return
        newNode = Node(val)
        self.root = newNode
        while True:
            p = self.root
            q = p
            val = int(input("Enter Node Val: ") or "0")
            if not val or val == None or val == '' or val == bool or val == 0:
                return
            newNode = Node(val)
            while p:
                if p.val > val:
                    q = p       
                    p = p.left  
                else:
                    q = p       
                    p = p.right 
            if q.val > val:
                q.left = newNode
            else:
                q.right = newNode           
            
           
    def LevelOrder(self):
        if not self.root:
            print("Tree have not yet any node !!")
            return
        st = []
        levelOrder = []
        p = self.root
        st.append(p)
        levelOrder.append(p.val)
        while(len(st) > 0):
            arr = st.pop(0)
            if arr.left:
                levelOrder.append(arr.left.val)
                st.append(arr.left)
            if arr.right:
               levelOrder.append(arr.right.val) 
               st.append(arr.right)
        print(levelOrder)

    def preOrder(self, root):
        if not root:
            return 
        print(root.val, end=" ")
        self.preOrder(root.left)
        self.preOrder(root.right)

    def inOrder(self, root):
        if not root:
            return 
        self.inOrder(root.left)
        print(root.val, end=" ")
        self.inOrder(root.right)

    def postOrder(self, root):
        if not root:
            return 
        self.postOrder(root.left)
        self.postOrder(root.right)
        print(root.val, end=" ")

        
            

# Obj
tr = BST()

# Crete a Binary Tree
tr.create()

# # insert val in a Binary Tree
# tr.insert(20)
# tr.insert(10)
# tr.insert(30)
# tr.insert(5)
# tr.insert(15)
# tr.insert(28)

# Traversal
tr.LevelOrder()

print("Pre Order Traversal")
tr.preOrder(tr.root)
print("\n")

print("Post Order Traversal")
tr.postOrder(tr.root)
print("\n")

print("In Order Traversal")
tr.inOrder(tr.root)