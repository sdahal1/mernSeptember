//https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/


let arr1 = [5,7,3,2,9,1,4]




const selectionSort = arr => {

    // if there is only one element or it is empty, it is already sorted
    if (arr.length <= 1){return arr;}

    // for loop to iterate through the total number of passes
    for (let i = 0; i < arr.length; i++) {
        
        // checking agains tthe value at position max (starts at 0)
        let max = 0;

        // for loop to check if any values are greater than the first
        for (let j = 1; j < arr.length - i; j++) {
            
            // check if value is bigger than max
            if (arr[j] > arr[max]){

                // set max to the value of that position
                max = j;
            }

        }
        // swap end position with max
        [arr[max], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[max]];
    }

    // returns the original array
    return arr;
}