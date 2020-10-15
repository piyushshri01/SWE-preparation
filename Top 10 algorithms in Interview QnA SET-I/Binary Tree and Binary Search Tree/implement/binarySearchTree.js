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
    traverse(){
        let st = []
        let levelOrder = []
        let p = this.root
        st.push(p)
        levelOrder.push(p.val)
        while(st.length > 0){
            let arr = st.shift()
            if (arr.left){
                levelOrder.push(arr.left.val)
                st.push(arr.left)
            }
            if (arr.right){
                levelOrder.push(arr.right.val) 
                st.push(arr.right)
            }
        }     
        console.log(levelOrder)
    }


    // Height of a tree
    Height(root){
        if (!root) return 0
        else{
            let lHeight = this.Height(root.left)
            let rHeight = this.Height(root.right)

            if(lHeight > rHeight) return lHeight+1
            else return rHeight+1
        }   
    }

    InPred(root) {
        while (root && root.right) {
            root = root.right;
        }
        return root;
    }

    InSucc(root) {
        while (root && root.left) {
            root = root.left;
        }
        return root;
    }

    DeleteInTree(root, val) {
        if (!root) {
            return null;
        }
        if (!root.left && !root.right) {
            if (root === this.root) {
                this.root = null;
            }
            root = null;
            return root;
        }
        if (root.data === val) {
            let q;
            if (this.Height(root.left) > this.Height(root.right)) {
                q = this.InPred(root.left);
                root.data = q.data;
                root.left = this.DeleteInTree(root.left, q.data);

            } else {
                q = this.InSucc(root.right);
                root.data = q.data;
                root.right = this.DeleteInTree(root.right, q.data);
            }

        } else if (root.data < val) {
            root.right = this.DeleteInTree(root.right, val);
        } else {
            root.left = this.DeleteInTree(root.left, val);
        }
        return root;
    }

}

// Obj
let tr = new BinarySearchTree();

// insert op.
tr.insert(20);
tr.insert(10);
tr.insert(30);
tr.insert(5);
tr.insert(15);
tr.insert(28);

console.log(tr);
 
// level order 
console.log(tr.traverse());