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
    makingCircular(){
        let p = this.head;
        let pointer = this.head.next;
        while(p.next){
            p = p.next;
        }
        p.next = pointer;
        return this;
    }
    detectLoop(){
        let p = this.head;
        let q = this.head.next.next;
        while(p && q){
            if(p.data === q.data){
                return true;
            }else{
                p = p.next;
                q = q.next.next;
            }
        }
        return false;
    }
    removeLoop(){
        let hashTbl = {};
        let p = this.head;
        let q;
        while(p){
            if(!hashTbl[p.data]){
                hashTbl[p.data] = true;
                q = p;
                p = p.next;
            }else {
                q.next = null;
                return this;
            }
        }
    }
}
// Obj
let list = new LinkedList();

// list 1 
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);

console.log(list.makingCircular());

console.log(list.detectLoop());

console.log(list.removeLoop());


