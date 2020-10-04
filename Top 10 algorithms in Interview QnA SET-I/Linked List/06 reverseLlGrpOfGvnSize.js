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

    countElem(li) {
        let p = li;
        let count = 0;
        while(p){
            count++;
            p = p.next;
        }
        return count;
    }

    revOfGvnSize(list, k){
        if(this.countElem(list.head) < k){
            return 'value of k is greater list size';
        } else {
            let p = list.head;
            let arr = [];
            for(let i = 0; p !== null; i++){
                arr[i] = p.data;
                p = p.next;
            }
            let q = list.head;
            let tr = 1;
            let count = 0;
            let len = arr.length-k;
            let prevLen = k;
            let start = (tr*k)-1;
            while(q) {
                for(let i = start; count < k && q; i--){
                    q.data = arr[i];
                    q = q.next;
                    count++;
                }
                tr++;
                count = 0;
                prevLen = len;
                len = len-k;
                start = prevLen > k ? (tr*k)-1 : (tr*k)-prevLen;
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
let list = new linkedList();

// insert elem
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.insert(6);
list.insert(7);
list.insert(8);

// Print all Nodes
console.log(list.printAllNodes());

// reverse linked list of gvn of grp size
// list.revOfGvnSize(list, 3)
list.revOfGvnSize(list, 5)

// Print all Nodes
console.log(list.printAllNodes());
