// Node 
class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
        this.hd = +Infinity;
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

// insert op.
tr.create();

// Method that prints the bottom view.  
function bottomView(root){
    // temp variable
    let temp;
    if (!root) return; 
  
    // Initialize a variable 'hd' with 0 
    // for the root element. 
    let hd = 0; 
  
    // TreeMap which stores key value pair 
    // sorted on key value 
    let m = new Map(); 
  
    // Queue to store tree nodes in level 
    // order traversal 
    let q = []; 
  
    // Assign initialized horizontal distance 
    // value to root node and add it to the queue. 
    root.hd = hd; 
    q.push(root);  // push() is used enqueue an item 
  
    // Loop until the queue is empty 
    while (q.length > 0) 
    { 
        temp = q[0]; 
        q.shift();   // In STL, pop() is used dequeue an item 
  
        // Extract the horizontal distance value 
        // from the dequeued tree node. 
        hd = temp.hd; 
  
        // Put the dequeued tree node to TreeMap 
        // having key as horizontal distance. Every 
        // time we find a node having same horizontal 
        // distance we need to replace the data in 
        // the map. 
        m[hd] = temp.val; 
  
        // If the dequeued node has a left child, add 
        // it to the queue with a horizontal distance hd-1. 
        if (temp.left) 
        { 
            temp.left.hd = hd-1; 
            q.push(temp.left); 
        } 
  
        // If the dequeued node has a right child, add 
        // it to the queue with a horizontal distance 
        // hd+1. 
        if (temp.right) 
        { 
            temp.right.hd = hd+1; 
            q.push(temp.right); 
        } 
    } 
  
    // Traverse the map elements using the iterator. 
    // for (let key of m.keys()) {
    //     console.log(key);
    // }
    console.log(m);
}
bottomView(tr.root);