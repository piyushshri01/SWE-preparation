// Node 
class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// BT
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(val){
        let newNode = new Node(val)
        if(!this.root){
            this.root = newNode;
            return this;
        } else {
            let p = this.root
            let q = p
            while (p){
                if(p.val > val){
                    q = p       // 10
                    p = p.left  // null
                } else {
                    q = p       
                    p = p.right 
                }
            }
                
            if (q.val > val){
                q.left = newNode;
                return this;
            } 
            else{
                q.right = newNode 
                return this;
            } 
        }
    }
}

// Obj
let tr = new BinarySearchTree();

// insert op.
tr.insert(20);
tr.insert(8);
tr.insert(22);
tr.insert(4);
tr.insert(12);
tr.insert(10);
tr.insert(14);



function lca(root, n1, n2){
    // Base Case 
    if(!root){
        return
    } 
    // If both n1 and n2 are smaller than root, then LCA 
    // lies in left 
    if(root.val > n1 && root.val > n2){
        return lca(root.left, n1, n2) 
    }   
  
    // If both n1 and n2 are greater than root, then LCA 
    // lies in right  
    if(root.val < n1 && root.val < n2){
        return lca(root.right, n1, n2)
    }
  
    return root.val 
}
      
console.log(lca(tr.root, 10, 14));
console.log(lca(tr.root, 14, 8));
console.log(lca(tr.root, 10, 22));
