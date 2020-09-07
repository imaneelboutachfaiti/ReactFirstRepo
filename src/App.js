import './App.css';
import Hello from './Components/Hello';
import Increment from './Components/IncrementButton';
import React, { useState } from 'react';
import Decrement from './Components/decrementButton';
import LoginForm from './Components/Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Form from './Components/Form';

const date = new Date().toLocaleTimeString();


function App(props) {
  const [counter, setCounter] = useState(5);
  function handleChange(e) {
    setCounter(e.target.value);
  }

  return (
    <Router>
      <div>
        <h2>React Router</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/login'} className="nav-link"> login </Link></li>
            <li><Link to={'/hello'} className="nav-link">hello</Link></li>
            <li><Link to={'/decrement'} className="nav-link">Decrement </Link></li>
            <li><Link to={'/increment'} className="nav-link">Increment</Link></li>
            <li><Link to={'/form'} className="nav-link">Form</Link></li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route path='/login' component={LoginForm} />
          <Route path="/hello" render={(props) => (<Hello {...props} date={date} />)} />
          <Route path="/decrement" render={(props) => (
            <Decrement {...props} counter={counter} setCounter={setCounter} handleChange={handleChange} />
          )}
          />
          <Route path="/increment" render={(props) => (
            <Increment {...props} counter={counter} setCounter={setCounter} handleChange={handleChange} />
          )}
          />
          <Route path='/form' component={Form}></Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
