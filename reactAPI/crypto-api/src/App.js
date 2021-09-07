import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Coins from './components/Coins';

function App() {

  return (
    <div className="App container">
      <h1>Top Cryptos Today!</h1>
      <Coins></Coins>
    </div>
  );
}

export default App;
