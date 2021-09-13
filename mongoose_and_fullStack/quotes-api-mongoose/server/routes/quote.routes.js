const QuoteController = require("../controllers/quote.controller");


module.exports = app => {
    app.get("/api", QuoteController.helloworld);
    app.get("/api/quotes", QuoteController.findAllQuotes);
    app.post("/api/quotes", QuoteController.createNewQuote);
    
}