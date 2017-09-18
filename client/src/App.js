import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar/>
            <Route exact path="/" component={Welcome} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
