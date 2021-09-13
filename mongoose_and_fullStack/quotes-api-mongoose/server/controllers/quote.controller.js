const Quote = require("../models/quotes.model");



module.exports.helloworld = (req, res) => {
    res.json({ message: "Hello Quotes-api with mongoose modularized!!!" });
}

module.exports.findAllQuotes = (req,res)=>{
    Quote.find()
        .then(allQuotes=>{
            res.json({results: allQuotes})
        })
        .catch(err=>{
            res.json({err:err})
        })
}


module.exports.createNewQuote = (req,res)=>{
    Quote.create(req.body)
        .then(newQuoteObj=>{
            res.json({results: newQuoteObj })
        })
        .catch(err=>{
            res.json({err:err})
        })
}


