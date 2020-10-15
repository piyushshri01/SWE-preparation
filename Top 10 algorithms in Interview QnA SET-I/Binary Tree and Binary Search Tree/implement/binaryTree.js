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
        while(true){
            let parentNode = qu.shift();
            val = prompt(`Enter ${parentNode.val} Left Node `);
            if(!parentNode.left && val) {
                newNode = new Node(val);
                parentNode.left = newNode;
                qu.push(newNode);
            } 
            if (!val || val == null || val == '' || val == Boolean) return this.root;
            
            val = prompt(`Enter ${parentNode.val} Right Node `);
            if(!parentNode.right && val) {
                newNode = new Node(val);
                parentNode.right = newNode;
                qu.push(newNode);
            } 
        }
    }
    // Recursive Tree Traversal
    levelOrder( root){
        let h = this.height(root) 
        for (let i = 1; i< h+1; i++){
            this.printGivenLevel(root, i) 
        }        
    }  
  
    // Print nodes at a given level 
    printGivenLevel(root , level){
        if (!root){
            return
        } 
            
        if (level == 1){
            console.log(root.val) 
        } 
        else if(level > 1){
            this.printGivenLevel(root.left , level-1) 
            this.printGivenLevel(root.right , level-1) 
        }         
    }


    preOrder(root){
        if (!root){
            return 
        }
           
        console.log(root.val)
        this.preOrder(root.left)
        this.preOrder(root.right)
    }


    inOrder(root){
        if (!root) return;

        this.inOrder(root.left)
        console.log(root.vals)
        this.inOrder(root.right)
    }


    postOrder(root){
        if (!root) return 
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.val, end=" ")

    }

    // Iterative Tree Traversal
    LevelOrderIterative(root){
        if (!root){
            console.log("Tree have not yet any node !!")
            return
        } 
        qu = []
        p = root
        qu.push(p)
        console.log(p.val)
        while (qu.length > 0) {
            deQu = qu.shift()
            if (deQu.left){
                console.log(deQu.left.val)
                qu.append(deQu.left)
            }
            if (deQu.right){
                console.log(deQu.right.val) 
                qu.append(deQu.right)
            }
        }
    }


    PreOrderIterative(root){
        let p = root
        let st = []
        while(st.length > 0 && p) {
            if (p){
                console.log(p.val)
                st.append(p)
                p = p.left
            }
            else{
                p = st.pop()
                p = p.right
            }
        }
    }

    inOrderIterative(root){
        let p = root
        let st = []
        while(st.length > 0 && p) {
            if (p){
                st.append(p)
                p = p.left
            }
            else{
                p = st.pop()
                console.log(p.val)
                p = p.right
            }
        }
    }
 

    postOrderIterative(root){
        let p = root
        let st = []
        while (st.length > 0 || p){
            if (p){
                st.push(p)
                p = p.left
            }
            else{
                let temp = st.pop()
                if (temp.val > 0){
                    temp.val = -(temp.val)
                    st.push(temp)
                    p = temp.right
                }
                else{
                    temp.val = -(temp.val) 
                    console.log(temp.val)
                    p = null
                }
            }
        }
    }


    // Height of a tree
    height(root){
        if (!root) return 0
        else{
            let lHeight = this.height(root.left)
            let rHeight = this.height(root.right)

            if(lHeight > rHeight) return lHeight+1
            else return rHeight+1
        }   
    }

    
    countNode(root){
        let x, y;
        if (root){
            x = this.countNode(root.left)
            y = this.countNode(root.right)
            return x+y+1
        }    
        return 0
    }


    DegNode(root){
        if (root){
            // // if deg is 2 
            // if (root.right && root.left){
            //     return this.DegNode(root.right)+this.DegNode(root.left)+1
            // }
            // else{
            //     return this.DegNode(root.right)+this.DegNode(root.left)
            // }
                

            // // if deg is 1 or 2
            // if (root.right != null || root.left != null){
            //     return this.DegNode(root.right)+this.DegNode(root.left)+1
            // }
            // else{
            //     return this.DegNode(root.right)+this.DegNode(root.left)
            // }

            // // if deg is exactly 1
            // if ( (root.right != null && root.left == null) || (root.right == null && root.left != null) ){
            //     return this.DegNode(root.right)+this.DegNode(root.left)+1
            // }
            // else{
            //     return this.DegNode(root.right)+this.DegNode(root.left)
            // }

            
            // if deg is 0 (Leaf Node) 
            if(!root.right && !root.left){
                return this.DegNode(root.right)+this.DegNode(root.left)+1
            }else {
                return this.DegNode(root.right)+this.DegNode(root.left)
            }

        }
        return 0 
    }

}

// Obj
let tr = new BinaryTree();

// insert op.
console.log(tr.create());

// print all nodes
// console.log("Level Order Traversal")
// tr.levelOrder(tr.root)
// console.log("\n")


// console.log("Pre Order Traversal")
// tr.preOrder(tr.root)
// console.log("\n")

// console.log("Post Order Traversal")
// tr.postOrder(tr.root)
// console.log("\n")

// console.log("In Order Traversal")
// tr.inOrder(tr.root)
// console.log("\n")

// Height of a tree
console.log("Height of a Tree:")
console.log(tr.height(tr.root))

// Count Node
console.log("Total Nodes:")
console.log(tr.countNode(tr.root))

// Count Deg(0 1 2) of exist Node
console.log(tr.DegNode(tr.root))