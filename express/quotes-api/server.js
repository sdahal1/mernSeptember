const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors())


const quotesTable= [
    {content: "The sharing of joy, whether physical, emotional, psychic, or intellectual, forms a bridge between the sharers which can be the basis for understanding much of what is not shared between them, and lessens the threat of their difference.", author:"Audre Lorde"},
    {content:"If you are not willing to learn, no one can help you. if you are determined to learn, no one can stop you.", author:"Emilé"},
    {content:"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", author:"Maya Angelou"},
    {content:"A day without sunshine is like, you know, night.", author:"Steve Martin"},
    {content:"When you look at people who are successful, you will find that they aren't the people who are motivated, but have consistency in their motivation", author:"Abhilekh"},
    {content:"Don't believe everything you read on the internet just because there's a picture with a quote next to it.", author:"Abraham Lincoln"},
    {content:"Man’s reach should exceed his grasp, else what’s a heaven for?", author:"Robert Browning"},
    {content:"It isn't the mountains ahead to climb that wear you out; it's the pebble in your shoe.", author:"Muhammad Ali"},
    {content:"You miss 100% of the shots you don't take.", author:"Michael Scotttttttt!"}
]


app.get("/api",(req,res)=>{
    res.json({status: "OK", msg:"Hello Express!" })
})

app.get("/api/quotes", (req,res)=>{
    res.json({
        status: "OK",
        count: quotesTable.length,
        results: quotesTable
    })
})

app.post("/api/quotes", (req,res)=>{
    console.log("INFO FROM REQ--->", req.body)
    quotesTable.push(req.body)
    res.json({
        status: "OK",
        count: quotesTable.length,
        results: quotesTable
    })
})

app.get("/api/quotes/:idx",(req,res)=>{
    // const {idx} = req.params
    console.log("REQ PARAMS IS THIS -->", req.params)
    res.json({
        results: quotesTable[req.params.idx],
        msg:"ok"
    })
})

app.put("/api/quotes/:idx", (req,res)=>{
    console.log("INFO FROM REQ--->", req.body)
    quotesTable[req.params.idx] = req.body
    res.json({
        status: "OK",
        count: quotesTable.length,
        results: quotesTable
    })
})

app.delete("/api/quotes/:idx", (req,res)=>{
    quotesTable.splice(req.params.idx, 1)
    res.json({
        status: "OK",
        count: quotesTable.length,
        results: quotesTable
    })
})







app.listen( port, () => console.log(`Listening on port: ${port}`) );