//createe a function that accepts 2 sorted arrays, and combines them into 1 sorted array and returns that sorted array

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

console.log(combine([3,6,9,10,11,15,18,19], [2,3,5,14] )) //[2,3,3,5, 6, 9, 10, 11,14, 15, 18, 19]
console.log(combine([3,6,9,10], [-2,3,5,11,15,18,19] )) 





//result= [2,3,3,5,6,9,10,11,14,15,18,19]
//i=0-->1-->2-->3-->4-->5-->6->7-->8
//j=0-->1-->2-->3-->4



