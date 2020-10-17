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
        this.res = -Infinity;
    }
    create(){
        let val = prompt("Enter Root Node ");
        if (!val || val == null || val == '' || val == Boolean) return;
        let newNode = new Node(Number(val));
        this.root = newNode;
        let qu = [];
        qu.push(this.root);
        while(qu.length > 0){
            let parentNode = qu.shift();
            val = prompt(`Enter ${parentNode.val} Left Node `);
            if(!parentNode.left && val) {
                newNode = new Node(Number(val));
                parentNode.left = newNode;
                qu.push(newNode);
            } 
            
            val = prompt(`Enter ${parentNode.val} Right Node `);
            if(!parentNode.right && val) {
                newNode = new Node(Number(val));
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

// max path sum method
function maxPathSum(root){
    if(!root){
        return 0
    }
    let left = this.maxPathSum(root.left)
    let right = this.maxPathSum(root.right)

    let maxSingle = Math.max(Math.max(left, right)+root.val, root.val)

    let maxTop = Math.max(maxSingle, left+right+root.val)

    tr.res = Math.max(tr.res, maxTop)

    return maxSingle
}
maxPathSum(tr.root, tr.res);
console.log(tr.res);