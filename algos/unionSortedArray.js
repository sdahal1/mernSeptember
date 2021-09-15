

function union(arr1, arr2){
    var output = []
    var idx1 = 0
    var idx2 = 0

    while(idx1< arr1.length && idx2 < arr2.length){
        if(arr1[idx1] === arr2[idx2]){
            output.push(arr1[idx1])
            idx1++
            idx2++
        }
        else if(arr1[idx1]<arr2[idx2]){
            output.push(arr1[idx1])
            idx1++
        }
        else{
            output.push(arr2[idx2])
            idx2++
        }
    }
    // console.log("results so far", output)
    while(arr1[idx1]){
        output.push(arr1[idx1])
        idx1++
    }

    while(arr2[idx2]){
        console.log("wha", arr2, idx2)
        output.push(arr2[idx2])
        idx2++
    }
    return output
}

console.log(union([1,2,2,2,7,7,7], [2,2,6,6,7,7]))





///another solution

unionSortedArr = (arr1, arr2) => {
    let output = []
    while (arr1.length != 0 || arr2.length != 0) {
        if (arr2[0] == arr1[0]) {
            output.push(arr2.shift())
            arr1.shift()
        }
        if (arr1[0] < arr2[0])
            output.push(arr1.shift())
        if (arr2[0] < arr1[0])
            output.push(arr2.shift())
        if (arr1.length == 0 && arr2.length > 0)
            output.push(arr2.shift())
        if (arr2.length == 0 && arr2.length > 0)
            output.push(arr2.shift())
    }
    return output
}

console.log(unionSortedArr([-500, 1, 2, 2, 2, 7, 8, 16, 18, 30, 30, 30], [-1000, -500, -200, 2, 2, 6, 6, 7, 10, 12, 15, 16, 20, 28, 30, 80, 250, 1000]))
console.log(unionSortedArr([1, 2, 2, 2, 7, 8, 9, 10, 11, 12], [2, 2, 6, 6, 7, 8, 9, 13]))



const unionRemix = (arr1, arr2) => {

    let output = [];
    let runner1 = 0;
    let runner2 = 0;

    while (runner1 < arr1.length || runner2 < arr2.length){

        if (arr1[runner1] == arr2[runner2]) {
            output.push(arr1[runner1]);
            runner1++;
            runner2++;
        }

        else if ((arr1[runner1] < arr2[runner2]) || (runner2 == arr2.length)){
            output.push(arr1[runner1]);
            runner1++;
        }

        else if ((arr1[runner1] > arr2[runner2]) || (runner1 == arr1.length)){
            output.push(arr2[runner2]);
            runner2++;
        }

    }
    return output;
}


const unionSortRecursive = (arr1, arr2, runner1 = 0, runner2 = 0, output = []) => {

    // return teh output if we are at the end of both arrays
    if (runner1 >= arr1.length && runner2 >= arr2.length) {
        return output;
    }

    //if the values are equal, push to output and increase both runners
    else if (arr1[runner1] == arr2[runner2]) {
        output.push(arr1[runner1]);
        return unionSortRecursive(arr1, arr2, runner1 + 1, runner2 + 1, output);
    }

    // if teh first number is smaller OR if we have finished going through the second list, push the first value and increase teh runner
    else if ((arr1[runner1] < arr2[runner2])||(runner2==arr2.length)) {
        output.push(arr1[runner1]);
        return unionSortRecursive(arr1, arr2, runner1 + 1, runner2, output);
    }

    // if teh second number is smaller OR if we have finished going through the first list, push the second value and increase teh runner
    else if ((arr1[runner1] > arr2[runner2])||(runner1==arr1.length)){
        output.push(arr2[runner2]);
        return unionSortRecursive(arr1, arr2, runner1, runner2 + 1, output);
    }

}

