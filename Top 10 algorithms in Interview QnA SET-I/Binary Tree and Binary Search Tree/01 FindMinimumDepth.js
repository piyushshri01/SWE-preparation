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
}

// Obj
let tr = new BinaryTree();

// insert nodes
tr.create();

// find min depth method
function findMinDepth(root){
    if(!root){
        return 0
    }
    if (!root.left && !root.right){
        return 1
    }
    else if(!root.left){
        return findMinDepth(root.right)+1
    }
    else if(!root.right){
        return findMinDepth(root.left)+1
    }
    return Math.min(findMinDepth(root.left), findMinDepth(root.right))+1
}

// call findMinDepth function
console.log(findMinDepth(tr.root));