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
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            return this.head;
        }
        let p = this.head;        
        newNode.next = p;
        this.head = newNode;
        return this;
    }

    countElem(li) {
        let p = li;
        let count = 0;
        while(p){
            count++;
            p = p.next;
        }
        return count;
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
let list = new linkedList();

// insert elem in list1
list1.insert(9)
list1.insert(9)
list1.insert(9)

// insert elem in list2
list2.insert(1)
list2.insert(8)



function addLists(list1, list2){
    let p = list1;
    let q = list2;
    let k = 0;
    let l = 0;
    let a = []; // 9 9 9
    let b = []; //   1 8 
    while(p){
        a[k++] = p.data;
        p = p.next;
    }
    while(q){
        b[l++] = q.data;
        q = q.next; 
    }
    if(a.length > b.length){
        let x = a.length - b.length;
        while(x > 0){
            b.unshift(0);
            x--;
        }
    }else if(a.length < b.length){
        let x = b.length - a.length;
        while(x > 0){
            a.unshift(0);
            x--;
        }
    }
    let len = a.length > b.length ? a.length-1 : b.length-1;
    let carry = 0;
    let sum = 0;
    while(len >= 0){
        sum += a[len] + b[len] + carry;
        carry = Math.floor(sum/10);
        list.unshift(sum % 10);
        sum = 0;
        len--;
    }
    if(carry !== 0){
        list.unshift(carry)
    }
    return list;    
}

// Op.
console.log(addLists(list1.head, list2.head));
// printList
console.log(list.printAllNodes());