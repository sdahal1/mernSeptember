const rotateStr = (str, num)=>{
    let output = "";
    // rotating more than the number of letters in teh string doesn't matter, so use modulo to get the remainder
    let rotations = number%string.length;
    // loop to grab letters from teh back of the word and move to the front based on teh number of rotations
    for (let i = 1; i <= rotations; i++) {
        output = string[string.length-i] + output;
    }
    // loop to add the remainder of the word
    for (let i = 0; i < string.length - rotations; i++) {
        output += string[i];
    }
    // return the output string
    return output;


}


//output --> ""--> "y"--> "yoka"
//rotations = 1
//i = 1->0


rotateStr("basketball", 3) // allbasketb

rotateStr("hello", 2) //lohell

rotateStr("okay", 21) //yoka  //ayok //kayo //okay //yoka //ayok //kayo



// //bonus
// const isRotation = (str1, str1)=>{

// }

// isRotation("basketball", "allbasketb") //true
// isRotation("hello", "lolhe") //false