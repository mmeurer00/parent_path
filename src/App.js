import React from 'react';
import Home from './components/Home';
import Resource from './components/Resource';
import Community from './components/Community';
import Favorite from './components/Favorite';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar'
class App extends React.Component {

render(){
  return (
  <div className="App">
    <Router >
      <Navbar />
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/login" component={LoginForm} /> */}
      <Route exact path="/resource" component={Resource} />
      <Route exact path="/community" component={Community} />
      <Route exact path="/favorites" component={Favorite} />
    </Router>
  
   
    </div>
  )}
}

export default App;
