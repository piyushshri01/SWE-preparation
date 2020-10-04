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

    shift(){
        if(!this.head){
            return false;
        }
        let x = this.head;
        this.head = this.head.next;
        return x;
    }

    mergeLists(list1, list2) {
        if(!list1.head){
            return;
        } else {
            let p = list1.head;
            let q = list2.head;
            while(p && q){
                let prev = p.next;
                p.next = list2.shift();
                p.next.next = prev;
                if(p.next){
                    p = p.next.next;
                } else {
                    return this;
                }    
            }
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

// obj
let list1 = new linkedList();
let list2 = new linkedList();

// Exp 1
// insert elem in list1
list1.insert(5)
list1.insert(7)
list1.insert(17)
list1.insert(13)
list1.insert(11)

// insert elem in list2
list2.insert(12)
list2.insert(10)
list2.insert(2)
list2.insert(4)
list2.insert(6)

// // Exp 2
// // insert elem in list1
// list1.insert(1)
// list1.insert(2)
// list1.insert(3)

// // insert elem in list2
// list2.insert(4)
// list2.insert(5)
// list2.insert(6)
// list2.insert(7)
// list2.insert(8)

// Exp 3
// insert elem in list1
// list1.insert(1)

// insert elem in list2
// list2.insert(4)

// merge Two LL at alter pos
list1.mergeLists(list1, list2);

console.log(list1.printAllNodes());
console.log(list2.printAllNodes());
