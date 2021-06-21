import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Resource from './components/Resource';
import Community from './components/Community';
import Favorite from './components/Favorite';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div className="App">
    <Router >
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/resource" component={Resource} />
      <Route exact path="/community" component={Community} />
      <Route exact path="/favorites" component={Favorite} />
    </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          hi
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
