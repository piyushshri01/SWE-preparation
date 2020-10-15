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

    #  Delete a Node
    def InPred(self, root):
        while root and root.right:
            root = root.right
        return root

    def InSucc(self, root):
        while root and root.left:
            root = root.left
        return root

    def deleteNode(self, root, val):
        if not root:
            return None

        if not root.left and not root.right:
            if root == self.root:
                self.root = None
            root = None
            return root
    
        if root.val == val:
            q = None
            if self.height(root.left) > self.height(root.right):
                q = self.InPred(root.left)
                root.val = q.val
                root.left = self.deleteNode(root.left, q.val)

            else:
                q = self.InSucc(root.right)
                root.val = q.val
                root.right = self.deleteNode(root.right, q.val)

        elif root.val < val:
            root.right = self.deleteNode(root.right, val)
        else:
            root.left = self.deleteNode(root.left, val)
        return root
            

    # Recursive Tree Traversal
    def levelOrder(self, root): 
        h = self.height(root) 
        for i in range(1, h+1): 
            self.printGivenLevel(root, i) 
  
    # Print nodes at a given level 
    def printGivenLevel(self, root , level): 
        if root is None: 
            return
        if level == 1: 
            print(root.val,end=" ") 
        elif level > 1 : 
            self.printGivenLevel(root.left , level-1) 
            self.printGivenLevel(root.right , level-1) 

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

    #  Height
    def height(self, root):
        if root:
            lHeight = self.height(root.left)
            rHeight = self.height(root.right)
            
            if lHeight > rHeight:
                return lHeight+1
            else:
                return rHeight+1
        return 0


        
           

# Obj
tr = BST()

# Crete a Binary Tree
# tr.create()

# # insert val in a Binary Tree
tr.insert(20)
tr.insert(10)
tr.insert(30)
tr.insert(5)
tr.insert(15)
tr.insert(28)

# Delete a Node
tr.deleteNode(tr.root, 5)
tr.deleteNode(tr.root, 20)


# Recursive Tree Traversal
print("Level Order Recursive Traversal")
tr.levelOrder(tr.root)
print("\n")

# print("Pre Order Recursive Traversal")
# tr.preOrder(tr.root)
# print("\n")

# print("In Order Recursive Traversal")
# tr.inOrder(tr.root)
# print("\n")

# print("Post Order Recursive Traversal")
# tr.postOrder(tr.root)
# print("\n")

# print("Height of a tree:")
# print(tr.height(tr.root))