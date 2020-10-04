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
    mergeTwoList(A, B, C){
        let p = A;
        let q = B;
        while(p && q){
            if(p.data < q.data){
                C.insert(p.data);
                p = p.next;
            }else{
                C.insert(q.data);
                q = q.next;
            }
        }
        while(p){
            C.insert(p.data);
            p = p.next; 
        }
        while(q){
            C.insert(q.data);
            q = q.next;
        }
        return this;
    }
    count(list){
        let p = list.head;
        let count = 0;
        while(p){
            count++;
            p = p.next;
        }
        return count;
    }
    mergeSort(list, i, j, newList){
        if(!list.next){
            return this;
        }
        let mid = Math.floor((i+j)/2);
        if(i < j){
            let left = this.mergeSort(list, i, mid, newList);
            let right = this.mergeSort(list, mid+1, j, newList);
            return this.mergeTwoList(left, right, newList);
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
// Obj
let list1 = new LinkedList();
// let list2 = new LinkedList();
let list3 = new LinkedList();


// list 1 
list1.insert(40);
list1.insert(20);
list1.insert(60);
list1.insert(10);
list1.insert(50);
list1.insert(30);

// // list 2
// list2.insert(10);
// list2.insert(50);
// list2.insert(30);

// Print all Nodes
console.log(list1.printAllNodes());

// console.log(list3.mergeTwoList(list1.head, list2.head, list3));
let len = list1.count(list1)
list3.mergeSort(list1.head, 0, len, list3);

// Print all Nodes
console.log(list3.printAllNodes());