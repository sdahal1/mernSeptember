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

    // removes first number (index 1) and restructures tree to make sure everything still works
    removeValue(){
        // swap the last element in the heap with the first
        [this.heap[1], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[1]];

        // remove teh last element
        this.heap.pop();

        // estavblish starting index to check and children
        let currentIndex = 1;
        let leftChild = 2 * currentIndex;
        let rightChild = 2 * currentIndex + 1;
        // while loop to run if the current index is greater than the left or right child
        while(((this.heap[currentIndex] > this.heap[leftChild]) || (this.heap[currentIndex] > this.heap[rightChild]))){
            // check if the left child or right child is smaller, swap with the smaller child (smaller number has to be above larger number)
            if(this.heap[leftChild] < this.heap[rightChild]){
                // if left child is smaller, swap with left
                [this.heap[currentIndex], this.heap[leftChild]] = [this.heap[leftChild], this.heap[currentIndex]];
                // update the current index to check if we need to keep moving it
                currentIndex = leftChild;
                leftChild = 2 * currentIndex;
                rightChild = 2 * currentIndex + 1;
            }
            // else the right child will be smaller, swap with right, update currentIndex
            else {
                [this.heap[currentIndex], this.heap[rightChild]] = [this.heap[rightChild], this.heap[currentIndex]];
                currentIndex = rightChild;
                leftChild = 2 * currentIndex;
                rightChild = 2 * currentIndex + 1;
            }
        }
        return this;
    }
}




let heap1 = new MinHeap()

console.log(heap1)

heap1.insert(6).insert(8).insert(7).insert(3).insert(1)

console.log(heap1)
