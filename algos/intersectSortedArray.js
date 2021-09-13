const intersectArr = (arr1,arr2)=>{
    let result = [];
    let i = 0;
    let j = 0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] == arr2[j]){
            result.push(arr1[i])
            i++
            j++
        }else if(arr1[i]<arr2[j]){ //if the first array has the smaller value
            i++
        }else{//if the second array has the smaller value
            j++
        }

    }
    
    return result;
}



console.log(intersectArr([1,2,3,3,4,4,6], [2,3,4,4,6])) //[2,3,4,4,6]
console.log(intersectArr([1,1,2,3,3,4,4,6], [1,2,3,4,4,5,6])) //[1,2,3,4,4,6]


//i=2->3->4->5->6->7->8
//j=1->2->3->4->5->6
//arr1.length = 8
//arr2.length = 6



intersectArr([1,1,3,3,3,4,9], [1,2,3,6,8,9,9]) //[1,3,9]

