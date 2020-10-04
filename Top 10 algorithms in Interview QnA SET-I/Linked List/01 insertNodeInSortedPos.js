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
    insertNodeInSortedPos(val){
        let newNode = new Node(val);
        let p = this.head;
        let q = p;
        if(!this.head){
            this.head = newNode;
            return this;
        } else {
            if(val < p.data){
                newNode.next = p;
                this.head = newNode;
                return this;
            } else {
                while(p){
                    if(p.data < val){
                        q = p;
                        p = p.next;
                    } else {
                        let prev = q.next;
                        q.next = newNode;
                        newNode.next = prev;
                        return this;
                    }
                }
            }
        }
        q.next = newNode;
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

// insertNodeInSortedPos
list.insertNodeInSortedPos(2);
list.insertNodeInSortedPos(7);
list.insertNodeInSortedPos(5);
list.insertNodeInSortedPos(15);
list.insertNodeInSortedPos(10);
list.insertNodeInSortedPos(1);
list.insertNodeInSortedPos(1);



console.log(list);
console.log(list.printAllNodes());