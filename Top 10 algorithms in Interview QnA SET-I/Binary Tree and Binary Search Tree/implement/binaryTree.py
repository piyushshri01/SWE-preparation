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
        if not val or val == None or val == '' or val == bool:
            return
        qu = []
        qu.append(self.root)
        while len(qu) > 0:
            parentNode = qu.pop(0)
            print("Enter",parentNode.val,"Left Node")
            val = input()
            if not parentNode.left and val:
                newNode = Node(val)
                parentNode.left = newNode
                qu.append(newNode)
            
            print("Enter",parentNode.val,"Right Node")
            val = input()
            if not parentNode.right and val:
                newNode = Node(val)
                parentNode.right = newNode
                qu.append(newNode)
    
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

    # Iterative Tree Traversal
    def LevelOrderIterative(self, root):
        if not root:
            print("Tree have not yet any node !!")
            return
        qu = []
        p = root
        qu.append(p)
        print(p.val, end=" ")
        while len(qu) > 0:
            deQu = qu.pop(0)
            if deQu.left:
                print(deQu.left.val, end=" ")
                qu.append(deQu.left)
            if deQu.right:
               print(deQu.right.val, end=" ") 
               qu.append(deQu.right)

    def PreOrderIterative(self, root):
        p = root
        st = []
        while len(st) > 0 or p:
            if p:
                print(p.val, end=" ")
                st.append(p)
                p = p.left
            else:
                p = st.pop()
                p = p.right
                    

    def inOrderIterative(self, root):
        p = root
        st = []
        while len(st) > 0 or p:
            if p:
                st.append(p)
                p = p.left
            else:
                p = st.pop()
                print(p.val, end=" ")
                p = p.right

    def postOrderIterative(self, root):
        p = root
        st = []
        while len(st) > 0 or p:
            if p:
                st.append(p)
                p = p.left
            else:
                temp = st.pop()
                if temp.val > 0:
                    temp.val = -(temp.val)
                    st.append(temp)
                    p = temp.right
                else:
                    temp.val = -(temp.val) 
                    print(temp.val, end=" ")
                    p = None

    # Height of a tree
    def height(self, root):
        if not root:
            return 0
        else:
            lHeight = self.height(root.left)
            rHeight = self.height(root.right)

            if(lHeight > rHeight):
                return lHeight+1
            else:
                return rHeight+1
    
    def countNode(self, root):
        if root:
            x = self.countNode(root.left)
            y = self.countNode(root.right)
            return x+y+1
        return 0

    def DegNode(self, root):
        if root:
            # if deg is 2 
            if root.right and root.left:
                return self.DegNode(root.left)+self.DegNode(root.right)+1
            else:
                return self.DegNode(root.left)+self.DegNode(root.right)

            # # if deg is 1 or 2 
            # if root.right != None or root.left != None:
            # return self.DegNode(root.left)+self.DegNode(root.right)+1
            # else:
            #     return self.DegNode(root.left)+self.DegNode(root.right)

            # # if deg is 1
            # if (root.right != None and root.left == None) or (root.right == None and root.left != None):
            # return self.DegNode(root.left)+self.DegNode(root.right)+1
            # else:
            #     return self.DegNode(root.left)+self.DegNode(root.right)
            
            # # if deg is 0 (Leaf Node) 
            # if not root.right and not root.left:
            # return self.DegNode(root.left)+self.DegNode(root.right)+1
        return 0           
           

# Obj
tr = BinaryTree()

# Crete a Binary Tree
tr.create()

# print all nodes
print("Level Order Traversal")
tr.levelOrder(tr.root)
print("\n")


print("Pre Order Traversal")
tr.preOrder(tr.root)
print("\n")

print("Post Order Traversal")
tr.postOrder(tr.root)
print("\n")

print("In Order Traversal")
tr.inOrder(tr.root)
print("\n")

# Height of a tree
print("Height of a Tree:")
print(tr.height(tr.root))

# Count Node
print("Total Nodes:")
print(tr.countNode(tr.root))

# Count Deg(0 1 2) of exist Node
print(tr.DegNode(tr.root))