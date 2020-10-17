// New node of a tree  
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
    inOrderIterative(root){
        let p = root
        let st = []
        let postOrder = []
        while (st.length > 0 || p){
            if (p){
                st.push(p)
                p = p.left
            }
            else{
                let temp = st.pop()
                postOrder.push(temp.val)
                p = temp.right;
            }
        }
        return postOrder;
    }    
}

// Obj
let tr = new BinaryTree();

// insert op.
tr.create();

// post order traversal
console.log(tr.inOrderIterative(tr.root));
          
// Utility method that actually removes  
// the nodes which are not on the pathLen >= k. 
// This method can change the root as well.  
function removeShortPathNodesUtil(root, level, k){
  
    // Base condition  
    if (!root) return null
  
    // Traverse the tree in postorder fashion  
    // so that if a leaf node path length is  
    // shorter than k, then that node and all  
    // of its descendants till the node which   
    // are not on some other path are removed.  
    root.left = removeShortPathNodesUtil(root.left,  
                                         level + 1, k)  
    root.right = removeShortPathNodesUtil(root.right,  
                                          level + 1, k)  
  
    // If root is a leaf node and it's level  
    // is less than k then remove this node.  
    // This goes up and check for the ancestor  
    // nodes also for the same condition till 
    // it finds a node which is a part of other  
    // path(s) too.  
    if (!root.left && !root.right && level < k) return null
      
    // Return root  
    return root  
} 
// Method which calls the utitlity method  
// to remove the short path nodes.  
function removeShortPathNodes(root, k){
    return removeShortPathNodesUtil(root, 1, k) 
} 

removeShortPathNodes(tr.root, 4);

console.log(tr.inOrderIterative(tr.root));
