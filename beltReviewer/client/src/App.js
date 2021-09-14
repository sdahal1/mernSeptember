import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import AllNinjas from './components/AllNinjas';


function App() {

  

  
  return (
    <div className="App container">
      <h1>Wall of Ninjas</h1>
      <AllNinjas></AllNinjas>
    </div>
  );
}

export default App;
