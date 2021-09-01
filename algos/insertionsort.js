//https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/


const insertionSort = (arr)=> {
    for(var i = 1; i < arr.length; i++){
        let j = i
        while(arr[j]< arr[j-1]){
            [arr[j], arr[j-1]]=[arr[j-1], arr[j]]
            j--
        }
    }
    return arr
    }


console.log(insertionSort([4,7,1,2,5,0,9,6])) 



//i = 1->2->1->0->1->2->3->2->1->2->3->4->3->4->5->4->3->2->1->0->1->2->3->4->5->6->7->6->5->6->7->8

//i = 1->2->3
//j = 1->2->1->0->3

