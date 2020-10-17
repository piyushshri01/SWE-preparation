// Method 2
function arrRepresentBSTpreOrder(arr){
    let stack = [];
    let root = -Infinity;
    
    // traverse arr
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < root){
            return false
        }
        // check stack top value is less than current value 
        while(stack.length > 0 && stack[stack.length-1] < arr[i]){
            root = stack.pop();
        }
        stack.push(arr[i])
    }
    return true;
}

// // exp.1
// let arr = [2,4,1]

// // exp.2
// let arr = [2,4,3]

// // exp.3
// let arr = [40, 30, 35, 80, 100]

// exp.4
let arr = [40, 30, 35, 20, 80, 100]

console.log(arrRepresentBSTpreOrder(arr));


// // Method 1
// // Node 
// class Node{
//     constructor(val){
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

// // BT
// class BinarySearchTree{
//     constructor(){
//         this.root = null;
//     }
//     insert(val){
//         let newNode = new Node(val)
//         if(!this.root){
//             this.root = newNode;
//             return this;
//         } else {
//             let p = this.root
//             let q = p
//             while (p){
//                 if(p.val > val){
//                     q = p       // 10
//                     p = p.left  // null
//                 } else {
//                     q = p       
//                     p = p.right 
//                 }
//             }
                
//             if (q.val > val){
//                 q.left = newNode;
//                 return this;
//             } 
//             else{
//                 q.right = newNode 
//                 return this;
//             } 
//         }
//     }
//     preOrder(root, arr){
//         if(!root){
//             return
//         }
//         arr.push(root.val)
//         this.preOrder(root.left, arr)
//         this.preOrder(root.right, arr)
//         return arr
//     }
// }

// // Obj
// let tr = new BinarySearchTree();

// // console.log(tr.preOrder(tr.root, []));

// // Check given arr is preorder traversal or not
// function checkValidatePOT(arr, arrPOT){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== arrPOT[i]){
//             return false
//         }
//     }
//     return true;
// }
// // // exp.1
// // let arr = [2,4,1]

// // // exp.2
// // let arr = [2,4,3]

// // // exp.3
// // let arr = [40, 30, 35, 80, 100]

// // // exp.4
// // let arr = [40, 30, 35, 20, 80, 100]

// // Insert arr value in BST
// for(let i = 0; i < arr.length; i++){
//     tr.insert(arr[i])
// }
// let arrPOT = tr.preOrder(tr.root, [])
// console.log(checkValidatePOT(arr, arrPOT));