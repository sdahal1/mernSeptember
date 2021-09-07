import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Coins from './components/Coins';
import CoinsWithAxios from './components/CoinsWithAxios';

function App() {

  return (
    <div className="App container">
      <h1>Top Cryptos Today!</h1>
      {/* <Coins></Coins> */}
      <CoinsWithAxios></CoinsWithAxios>
    </div>
  );
}

export default App;
