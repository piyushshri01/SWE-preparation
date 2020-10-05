class Heap{
    constructor(){
        this.heap = [0];
        this.heapSort = [];
    }
    insert(val){
        this.heap[this.heap.length] = val;
        let childIdx = this.heap.length-1;
        let parentIdx = Math.floor(childIdx/2);
        let temp;
        while(parentIdx >= 1){
            if(this.heap[childIdx] > this.heap[parentIdx]){
                temp = this.heap[parentIdx];
                this.heap[parentIdx] = this.heap[childIdx];
                this.heap[childIdx] = temp;
            }
            childIdx = parentIdx;
            parentIdx = Math.floor(childIdx/2);
        }
        return this;
    }

    removeElem(){
        if(!this.heap[1]){
            return 'Heap is Empty';
        }
        let res = this.heap.splice(1,1);
        this.heapSort.push(res[0]);
        let parentIdx = 1;
        let temp;
        while(2*parentIdx < this.heap.length-1 || 2*parentIdx+1 < this.heap.length-1){
            if(this.heap[2*parentIdx] > this.heap[parentIdx] || this.heap[2*parentIdx+1] > this.heap[parentIdx]){
                if(this.heap[2*parentIdx] > this.heap[2*parentIdx+1]){
                    temp = this.heap[parentIdx];
                    this.heap[parentIdx] = this.heap[2*parentIdx];
                    this.heap[2*parentIdx] = temp;
                    parentIdx = 2*parentIdx;
                } else {
                    temp = this.heap[parentIdx];
                    this.heap[parentIdx] = this.heap[2*parentIdx+1];
                    this.heap[2*parentIdx+1] = temp;
                    parentIdx = 2*parentIdx+1;
                }
            } else {
                parentIdx = 2*parentIdx;
            }
            
        }
        return res;
    }
}

// obj
let hp = new Heap();

// insert elem in heap
hp.insert(4);
hp.insert(10);
hp.insert(3);
hp.insert(5);
hp.insert(1);


// remove Elem
hp.removeElem();
hp.removeElem();
hp.removeElem();
hp.removeElem();
hp.removeElem();



console.log(hp.heap);
console.log(hp.heapSort);
