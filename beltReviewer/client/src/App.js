import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import AllNinjas from './components/AllNinjas';
import NewNinjaForm from './components/NewNinjaForm';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";


function App() {

  

  
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Wall of Ninjas</h1>
        {/* <a className= "btn btn-success" href="/new">Create a new ninja</a> */}
        <Link className= "btn btn-info mr-3" to= "/">Home</Link>
        <Link className= "btn btn-success" to= "/new">Create a new ninja</Link>


        <Switch>
          <Route exact path= "/">
            <AllNinjas></AllNinjas>
          </Route>
          <Route exact path="/new">
            <NewNinjaForm></NewNinjaForm>
          </Route>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
