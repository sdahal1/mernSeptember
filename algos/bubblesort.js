function bubbleSort(arr){
    //run (iterate) through the array
    for(var j = 0; j<arr.length; j++){
        for(var i = 0; i<arr.length-j; i++){
            if(arr[i]> arr[i+1]){ //if the value at the current index is great than the value at the next index, then it is out of order and we need to swap
                // let temp = arr[i];
                // arr[i] = arr[i+1];
                // arr[i+1] = temp;
                //another way of swapping
                [arr[i], arr[i+1]]=[arr[i+1], arr[i]]
            }
        }
    }

    console.log(arr);
}


bubbleSort([23,12,18,22,21,1,13, 25])