//given an integer, convert to the binary
//https://www.rapidtables.com/convert/number/decimal-to-binary.html

const convertDecimalToBinary = (dec) => {
    divident = dec;
    binary = "";

    while(divident != 0){
        // console.log('divident is ', divident)
        modResult = divident % 2;
        divident = Math.floor(divident / 2);
        
        console.log('divident after division is ', divident)   
        
        console.log('modResult is ', modResult)
        binary = modResult + binary;
        
        console.log('binary is ', binary)
    }
    return binary;

}