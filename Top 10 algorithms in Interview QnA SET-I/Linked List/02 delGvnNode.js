// Node Class
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// Linked List Constr.
class linkedList{
    constructor(){
        this.head = null
    }
    insert(val){
       let newNode = new Node(val);
       if(!this.head){
           this.head = newNode;
           return this;
       } else {
           let p = this.head;
           while(p.next){
               p = p.next;
           }
           p.next = newNode;
           return this;
       }
    }
    deleteNode(val) {
        if(!this.head){
            return 'List is Empty';
        }
        let p = this.head;
        let q = p;
        if(val === p.data){
            this.head = p.next;
            return this;
        } else{
            while(p.next){
                // q = p; // 7
                if(p.data === val){
                    q.next = p.next;
                    return;
                } else {
                    q = p;
                    p = p.next;
                }
            }
        }
        if(val !== p.data){
            return undefined;
        }
        q.next = null;
        return this;
    }
    printAllNodes(){
        let p = this.head;
        let arr = [];
        while(p){
            arr.push(p.data);
            p = p.next;
        }
        return arr;
    }

}

// obj
let list = new linkedList();

// insert data in list
list.insert(2);
list.insert(7);
list.insert(5);
list.insert(15);
list.insert(10);
list.insert(1);
// print all nodes
console.log(list.printAllNodes());

// delete Node
list.deleteNode(2);
// list.deleteNode(1);
// list.deleteNode(15);
// list.deleteNode(5);
// list.deleteNode(7);
// list.deleteNode(10);




// print all nodes
console.log(list.printAllNodes());