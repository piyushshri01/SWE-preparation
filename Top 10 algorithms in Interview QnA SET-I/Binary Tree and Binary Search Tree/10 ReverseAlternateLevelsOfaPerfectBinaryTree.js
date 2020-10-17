// Node 
class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// BT
class BinaryTree{
    constructor(){
        this.root = null;
    }
    create(){
        let val = prompt("Enter Root Node ");
        if (!val || val == null || val == '' || val == Boolean) return;
        let newNode = new Node(val);
        this.root = newNode;
        let qu = [];
        qu.push(this.root);
        while(qu.length > 0){
            let parentNode = qu.shift();
            val = prompt(`Enter ${parentNode.val} Left Node `);
            if(!parentNode.left && val) {
                newNode = new Node(val);
                parentNode.left = newNode;
                qu.push(newNode);
            } 
            
            val = prompt(`Enter ${parentNode.val} Right Node `);
            if(!parentNode.right && val) {
                newNode = new Node(val);
                parentNode.right = newNode;
                qu.push(newNode);
            } 
        }
    }
    levelOrder(root){
        let qu = []
        let levelOrder = []
        if(!root){
            return
        }
        qu.push(root);
        levelOrder.push(root)
        while(qu.length > 0){
            let temp = qu.shift()
            levelOrder.push(temp.val)
            if(temp.left){
                qu.push(temp.left)
            }
            if(temp.right){
                qu.push(temp.right)
            }
        }
        return levelOrder;
    }
    height(root){
        if(root){
            let left = this.height(root.left)
            let right = this.height(root.right)
            if(left > right){
                return left+1
            } else {
                return right+1
            }
        }   
        return 0
    }
}
// Obj
let tr = new BinaryTree();

// insert op.
tr.create();

// level Order traversal
console.log(tr.levelOrder(tr.root));

// Height of a tree
console.log(tr.height(tr.root));

// reverse alternate levels method
function reverseAlternateLevels(root1, root2, lvl){
    // Base cases 
    if (!root1 || !root2) return
  
    // Swap subtrees if level is even 
    if (lvl % 2 == 0){
        let t = root1.val 
        root1.val = root2.val 
        root2.val = t 
    }
    // Recur for left and right subtrees  
    // (Note : left of root1 is passed and  
    // right of root2 in first call and  
    // opposite in second call. 
    reverseAlternateLevels(root1.left, root2.right, lvl + 1) 
    reverseAlternateLevels(root1.right, root2.left, lvl + 1) 
  
} 

// This function calls preorder()  
// for left and right children of root 
function reverseAlternate(root){
    if(!root.left && !root.right){
        return
    }
    reverseAlternateLevels(root.left, root.right, 0) 
}
    
reverseAlternate(tr.root);

console.log(tr.levelOrder(tr.root));