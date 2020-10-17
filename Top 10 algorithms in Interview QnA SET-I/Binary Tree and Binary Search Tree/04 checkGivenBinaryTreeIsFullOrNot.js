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
    // Iterative Tree Traversal
    LevelOrderIterative(root){
        if (!root){
            console.log("Tree have not yet any node !!")
            return
        } 
        let levelOrder = []
        let qu = []
        let p = root
        qu.push(p)
        while (qu.length > 0) {
            let deQu = qu.shift()
            if (deQu.left){
                levelOrder.push(deQu.left)
                qu.push(deQu.left)
            }
            if (deQu.right){
                levelOrder.push(deQu.right)
                qu.push(deQu.right)
            }
        }
        return levelOrder;
    }
}
// Obj
let tr = new BinaryTree();

// insert op.
tr.create();

// level order traversal
let lvlTraversal = tr.LevelOrderIterative(tr.root);

function checkGivenBinaryTreeIsFullOrNot(arr){
    if(arr.length < 1){
        return "Tree have not any node!"
    }
    let p;
    while(arr.length > 0){
        p = arr.pop();
        if((p.left && !p.right) || (!p.left && p.right) ){
            return "The Binary Tree is not full"
        }
    }
    return "The Binary Tree is full"
    
}
console.log(checkGivenBinaryTreeIsFullOrNot(lvlTraversal));