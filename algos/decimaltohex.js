//https://www.rapidtables.com/convert/number/decimal-to-hex.html

const decimalToHex = decimal => {
    let hexvalues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

    let output = "";

    while (Math.floor(decimal / 16) >= 0){
        // add the corresponding hexvalue based on the remainder
        output = hexvalues[decimal - 16 * Math.floor(decimal / 16)] + output;
        // break if the quotient is 0 (we are done and don't need to loop any more)
        if (Math.floor(decimal / 16) == 0){break};
        // update the value of decimal that we are looking at in the loop
        decimal = Math.floor(decimal / 16);
    }
    return output;

}





let hex = {0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:"A",11:"B",12:"C",13:"D",14:"E",15:"F",16:10}

const dec2hex = (num)=>{
    let result="";
    if(num === 0){return 0}
    while(num > 0){
        remainder = Math.floor(num % 16);
        num = Math.floor(num/16);
        result = hex[remainder] + result;
    }
    return result;
}

// console.log(dec2hex(99))//"63"
// console.log(dec2hex(58))//"3A"
console.log(dec2hex(0))//"63"


console.log(binary2hex(99))//"63"
console.log(binary2hex(58))//"3A"

