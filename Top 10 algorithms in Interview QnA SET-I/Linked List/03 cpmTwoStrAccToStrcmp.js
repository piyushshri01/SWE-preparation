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
    strCmp(li1, li2) {
        if(this.countElem(li1) > this.countElem(li2)){
            return 1
        } else if(this.countElem(li1) < this.countElem(li2)){
            return -1;
        } else {
            let len = this.countElem(li1); // becaouse both len are same else statement
            while(len > 0){
                if(li1.data == li2.data){
                    li1 = li1.next;
                    li2 = li2.next;
                    len--;
                } else {
                    return -1
                }
            }
        }
        return 0;
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
// test case 1
// // insert data in list 1
// list1.insert('g');
// list1.insert('e');
// list1.insert('e');
// list1.insert('k');
// list1.insert('s');
// list1.insert('a');

// // insert data in list 2
// list2.insert('g');
// list2.insert('e');
// list2.insert('e');
// list2.insert('k');
// list2.insert('s');
// list2.insert('b');

// // test case 2
// // insert data in list 1
// list1.insert('g');
// list1.insert('e');
// list1.insert('e');
// list1.insert('k');
// list1.insert('s');
// list1.insert('a');

// // insert data in list 2
// list2.insert('g');
// list2.insert('e');
// list2.insert('e');
// list2.insert('k');
// list2.insert('s');

// test case 3
// insert data in list 1
list1.insert('g');
list1.insert('e');
list1.insert('e');
list1.insert('k');
list1.insert('s');

// insert data in list 2
list2.insert('g');
list2.insert('e');
list2.insert('e');
list2.insert('k');
list2.insert('s');

// strcmp
console.log(list.strCmp(list1.head, list2.head));

// print all nodes
console.log(list1.printAllNodes());
console.log(list2.printAllNodes());
