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
    // Recursive Tree Traversal
    preOrder(root, arr){
        if (!root){
            return 
        }   
        arr.push(root.val)
        this.preOrder(root.left, arr)
        this.preOrder(root.right, arr)
        return arr;
    }
    inOrder(root, arr){
        if (!root) return;

        this.inOrder(root.left, arr)
        arr.push(root.val)
        this.inOrder(root.right, arr)
        return arr;
    }
}

// Obj
let subTr = new BinaryTree();
let Tr = new BinaryTree();


// insert op.
subTr.create();
Tr.create();

// sub tree
let sIn = subTr.inOrder(subTr.root, [])
let sPre = subTr.preOrder(subTr.root, [])

// tree
let tIn = Tr.inOrder(Tr.root, [])
let tPre = Tr.preOrder(Tr.root, [])

console.log(sIn, sPre);
console.log(tIn, tPre);

function checkIn(subTree, tree){
    if(subTree.length <= 0 && tree.length <= 0){
        return true
    }
    let count = 0;
    for(let i = 0; i <= tree.length-subTree.length; i++){
        let k = subTree.length;
        let l = 0;
        for(let j = i; 0 <  k; j++){
            if(subTree[l++] == tree[j]){
                count++;
            }
            k--;
        }
        if(count == subTree.length){
            return true;
        }
        count = 0;
    }
    return false;

}

let firstCheckIn = checkIn(sIn, tIn);
let lastCheckIn = checkIn(sPre, tPre);

if(firstCheckIn && lastCheckIn){
    console.log("true");
} else {
    console.log("false");
}
