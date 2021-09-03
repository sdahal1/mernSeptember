//createe a function that accepts 2 sorted arrays, and combines them into 1 sorted array and returns that sorted array
//https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/

const combine = (arr1, arr2)=>{
    //your code here
    let result = []
    let i = 0;
    let j = 0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] <arr2[j]){
            result.push(arr1[i])
            i++
        }else{
            result.push(arr2[j])
            j++
        }
    }

    while (i<arr1.length){
        result.push(arr1[i])
        i++
    }

    while (j<arr2.length){
        result.push(arr2[j])
        j++
    }

    return result

}

// console.log(combine([3,6,9,10,11,15,18,19], [2,3,5,14] )) //[2,3,3,5, 6, 9, 10, 11,14, 15, 18, 19]
// console.log(combine([3,6,9,10], [-2,3,5,11,15,18,19] )) 

// console.log(combine([5],[2]))

const mergeSort= (arr)=>{
    //base case --> when the length of the array is <= 1 (when we have single element array)
    if(arr.length<=1){
        return arr;
    }
    //recursively splice it until we get single element arrays
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid))
    console.log("left is this-->", left)
    console.log("right is this-->", right)

    return combine(left, right)




}

console.log(mergeSort([7,5,9,2,3,1,0]))



// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', "sea lions", "otter"];

// // console.log(animals.slice(1,4))
// let lefthalf = animals.slice(0,Math.floor(animals.length/2))
// let righthalf = animals.slice(Math.floor(animals.length/2))
// console.log(lefthalf)
// console.log(righthalf)
// console.log(animals.slice(-animals.length))



