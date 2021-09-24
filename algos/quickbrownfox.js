let words = [
    ["Quick", "Lazy"],
    ["Brown", "Red", "Yellow"],
    ["Fox", "Dog"]

]


// ["Quick brown fox", "quick brown dog", "quick brown cat", "quick red fox", "quick red dog", "quick red cat" ....etc; ]

const allcombinations = (words)=>{
    let result = [];
    function helper(comb, i){
        if(i ==words.length){ //base case--> when i reaches the length of the words array, it means that we have gottne a word from each sub array and put it into the combination string (comb)
            result.push(comb)
        }else{
            for(var j = 0; j<words[i].length; j++){
                helper(comb+words[i][j] + " ", i+1)
            }
        }
    }
    helper("", 0)
    return result
}


console.log(allcombinations(words))