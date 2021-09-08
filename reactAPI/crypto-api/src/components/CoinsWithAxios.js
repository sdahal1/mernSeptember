import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CoinsWithAxios = () => {

    
  
  
  //useEffect is a "hook"/function that accepts a function to run as soon as the page loads up/renders
    useEffect(()=>{
      console.log("page loaded!")
      //make an api call using axios to the coingecko api
      axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(res=>{ //.then is when we successfully get a response
          console.log("the response looks like this")
          console.log(res)
          // setAllCoins(res.results)

          //save the response into my state variable
          setAllCoins(res.data)
        })
        .catch(err=>{
          console.log(err)
        }) //.catch() means if there were any errors that came up in our api request, this is where we will handle those errors

    },[]) //USE EFFECT allows us to modify a state variable upon loading of the page, without the page infinitely re-rendering. If we do modify a state variable upon rendering the page without putting in useEffect, then the page keep re-rendering.

    const [allCoins, setAllCoins] = useState([])
   

    const clickHandler = ()=>{
      console.log("clicked!")
      
      let coins = [...allCoins]
      coins.sort(function (a, b) {
              return b.current_price - a.current_price;
            });
      setAllCoins(coins)
  }
    return (
        <div>
            <button onClick= {clickHandler} className="btn btn-success">Sort Descending!</button>
            {
                allCoins.map((coin, idx)=>{
                    return <div style = {{backgroundColor: "gray"}} key = {idx} className="card">
                    <div className="card-body">
                    <h4 className="card-title">{coin.name}</h4>
                    {/* <img src={coin.image} alt="" /> */}
                    <p className="card-text">Current Price: ${coin.current_price}</p>
                    {/* <a href="#!" className="btn btn-primary mb-3">Go somewhere</a> */}
                    </div>
                </div>
                })
            }
        </div>
    );
};


export default CoinsWithAxios;