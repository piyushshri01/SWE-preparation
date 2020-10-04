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
    union(list1, list2, list3){
        let p = list1.head;
        let q = list2.head;
        let hashTbl = {};
        while(p){
            if(!hashTbl[p.data]){
                hashTbl[p.data] = true;
                list3.insert(p.data);
            }
            p = p.next;
        }
        while(q){
            if(!hashTbl[q.data]){
                hashTbl[q.data] = true;
                list3.insert(q.data);
            }
            q = q.next;
        }
        return this;
    }
    intersection(list1, list2, list3){
        let p = list1.head;
        let q = list2.head;
        let hashTbl = {};
        while(p){
            if(!hashTbl[p.data]){
                hashTbl[p.data] = true;
            }
            p = p.next;
        }
        while(q){
            if(hashTbl[q.data]){
                hashTbl[q.data] = true;
                list3.insert(q.data);
            }
            q = q.next;
        }
        return this;
    }
}
// Obj
let list1 = new LinkedList();
let list2 = new LinkedList();
let union = new LinkedList();
let intersection = new LinkedList();

// list 1 
list1.insert(10);
list1.insert(15);
list1.insert(4);
list1.insert(20);
// list 2
list2.insert(8);
list2.insert(4);
list2.insert(2);
list2.insert(10);

console.log(union.union(list1, list2, union));

console.log(intersection.intersection(list1, list2, intersection));

