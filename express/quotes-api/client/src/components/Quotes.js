import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Quotes = () => {
    const [allQuotes, setAllQuotes] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/quotes")
            .then(res=>{
                console.log("RESPONSE FROM BACKEND -->", res)
                setAllQuotes(res.data.results)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])

    
    return (
        <div>
            {allQuotes.map((quote,i)=>{
                return <div className="card">
                <div className="card-body">
                  <h4 className="card-title">{quote.author}</h4>
                  <p className="card-text">
                    {quote.content}
                  </p>
                  <a href="#!" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              
            })}
        </div>
    );
};


export default Quotes;