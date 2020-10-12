# Node class 
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

# BT
class BinaryTree:
    def __init__(self):
        self.root = None

    def create(self):
        val = input("Enter Root Node: ")
        newNode = Node(val)
        self.root = newNode
        qu = []
        qu.append(self.root)
        while True:
            parentNode = qu.pop(0)
            print("Enter",parentNode.val,"Left Node")
            val = input()
            if not parentNode.left and val:
                newNode = Node(val)
                parentNode.left = newNode
                qu.append(newNode)
            
            if not val:
                self.LevelOrder()
                return 

            print("Enter",parentNode.val,"Right Node")
            val = input()
            if not parentNode.right and val:
                newNode = Node(val)
                parentNode.right = newNode
                qu.append(newNode)
    
    def LevelOrder(self):
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
tr = BinaryTree()

# Crete a Binary Tree
tr.create()

# print all nodes
# tr.LevelOrder()

print("Pre Order Traversal")
tr.preOrder(tr.root)
print("\n")

print("Post Order Traversal")
tr.postOrder(tr.root)
print("\n")

print("In Order Traversal")
tr.inOrder(tr.root)