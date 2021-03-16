class Node:
    def __init__(self, data):
      self.left = None
      self.right = None
      self.data = data

def convert_expression(expression, i):
    #code here
    if i >= len(expression): 
        return None
  
    # Create a new node object 
    # for the expression at 
    # ith index 
    root = Node(expression[i]) 
  
    i += 1
  
    # if current character of  
    # ternary expression is '?' 
    # then we add next character  
    # as a left child of 
    # current node 
    if (i < len(expression) and 
                expression[i] == "?"): 
        root.left = convert_expression(expression, i + 1) 
          
    # else we have to add it  
    # as a right child of 
    # current node expression[0] == ':' 
    elif i < len(expression): 
        root.right = convert_expression(expression, i + 1) 
    return root

#  tree preOrder traversal
def printPreOrder(root):
    if not root:
        return
    print(root.data,end=" ")
    printPreOrder(root.left)
    printPreOrder(root.right)


#  main method
expression = "a?b?c:d:e" #"a?b:c"
i = 0
res = convert_expression(expression, i)

printPreOrder(res)