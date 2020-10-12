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

}

// Obj
let tr = new BinaryTree();

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