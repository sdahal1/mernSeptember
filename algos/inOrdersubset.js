const ios = (str)=>{
    let result = [""]
    for (i in str){
        // console.log(str[i])
        result.push(str[i])
        for(j in str){
            if(str[j]!= str[i] && j>i){
                result.push(str[i]+str[j])
            }
        }
    }
    result.push(str)
    console.log(result)
}

ios("abc")