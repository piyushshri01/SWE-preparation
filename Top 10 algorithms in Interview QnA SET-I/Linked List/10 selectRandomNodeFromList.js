class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    insert(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            return this;
        }else {
            let p = this.head;
            while(p.next){
               p = p.next;
            }
            p.next = newNode;
            return this;
        }
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
//Obj
let list = new LinkedList();

list.insert(5);
list.insert(20);
list.insert(4);
list.insert(3);
list.insert(30);

console.log(list.printAllNodes());
