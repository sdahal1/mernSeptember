const binaryToDecimal = binary => {
    let output = 0;
    let exponent = 0;
    let binaryString = String(binary);
    for (let i = binaryString.length - 1; i >= 0; i--) {
        output += (parseInt(binaryString[i]) * (Math.pow(2, exponent)));
        exponent ++;
    }
    return output;
}



binary2dec("111010") //58