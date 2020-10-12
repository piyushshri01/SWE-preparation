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
        let newNode = new Node(val);
        this.root = newNode;
        let qu = [];
        qu.push(this.root);
        while(true){
            let parentNode = qu.shift();
            val = prompt(`Enter ${parentNode.val} Left Node `);
            newNode = new Node(val);
            if(!parentNode.left) {
                parentNode.left = newNode;
                qu.push(newNode);
            } 
            if(!val){
                return this.root;
            }
            
            val = prompt(`Enter ${parentNode.val} Right Node `);
            newNode = new Node(val);
            if(!parentNode.right) {
                parentNode.right = newNode;
                qu.push(newNode);
            } 
        }
    }
}

// Obj
let tr = new BinaryTree();

// insert op.
console.log(tr.create());