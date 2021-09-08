import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Welcome to the Routing Demo</h1>
        <Switch>
          <Route exact path = "/">
            <h3>Welcome to the home page</h3>
            <Link to="/about">Go to about page</Link> | <Link to="/funny">Show me a joke</Link>
          </Route>
          <Route exact path = "/about">
            <h1>This is supposed to only show on /about route</h1>
          </Route>
          <Route exact path = "/funny">
            <h3>Q: How many programmers does it take to change a light bulb?</h3>
            <p>A: none, that's a hardware problem</p>
            <p>another joke</p>
          </Route>
          <Route exact path = "/info/:id">
            <Info></Info>
          </Route>
          <Route exact path = "/info/:id/:color/:width">
            <Info></Info>
          </Route>
        </Switch>

      
      </BrowserRouter>
    </div>
  );
}

export default App;
