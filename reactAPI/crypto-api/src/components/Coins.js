import React, {useState} from 'react';

const Coins = () => {

    const [allCoins, setAllCoins] = useState([])
    // const [allPokemon, setAllPokemon] = useState([])


    const clickHandler = ()=>{
    console.log("clicked!")
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then(res=>{
        
        return res.json()
      }) //.then() means when the response is recieved back successfully from the api call, what to do with it
      .then(res=>{
        console.log("the response looks like this")
        console.log(res)
        // setAllCoins(res.results)

        //save the response into my state variable
        setAllCoins(res)
      })
      .catch(err=>{
        console.log(err)
      }) //.catch() means if there were any errors that came up in our api request, this is where we will handle those errors

  }
    return (
        <div>
            <button onClick= {clickHandler} className="btn btn-success">Show me the money!</button>
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


export default Coins;