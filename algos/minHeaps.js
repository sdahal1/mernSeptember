class MinHeap{
    constructor(){
        this.heap = [null]
    }

    insert(val){
        //push the val into the heap
        this.heap.push(val);
        console.log('the heap is ', this.heap);
        
        if(this.heap.length == 2){
            return this;
        }

        
        //calculate the parent from the current index (new value is pushed to last index--> this.heap.length-1)
        let newValIndex = this.heap.length-1;
        let parentIndex = Math.floor(newValIndex /2);
        
        if(this.heap[parentIndex] < this.heap[newValIndex]){ //is this in a heap format? if so, we're good to go, return out of the function
            return this;
        } else { //if it is not following the rules of a heap, then while the parent is greater than the child, do some swapping
            while(this.heap[parentIndex] > this.heap[newValIndex] && parentIndex>0){
                [ this.heap[parentIndex] , this.heap[newValIndex] ] = [  this.heap[newValIndex], this.heap[parentIndex]];

                newValIndex = parentIndex; //set the new child index as we go up the heap
                parentIndex = Math.floor(newValIndex / 2); //set the new parent index
            }
        }
        return this;

    }
}




let heap1 = new MinHeap()

console.log(heap1)

heap1.insert(6).insert(8).insert(7).insert(3).insert(1)

console.log(heap1)
