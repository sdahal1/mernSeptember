//given a string as an input, return a new string that only contain the unique characters from the original string by removing the duplicates. Keep the last instances of the duplicates in the resulting output 

const dedupeString = string => {

    // new string for output sinmce strings are immutable
    let output = "";

    // list of characters that are in use to check for duplicates
    // let inUse = [];

    // for loop to loop through the string, starting at the end
    for (let i = string.length - 1; i >= 0; i--) {
        // check if the character is not in use
        if (!output.includes(string[i])){
            // add it to the output
            output = string[i] + output;
            // add it to inUse
            // inUse.push(string[i]);
        }
    }
    return output;
}

dedupeString("Snaps Crackles Pops!") //"SnCrackle Pops!"