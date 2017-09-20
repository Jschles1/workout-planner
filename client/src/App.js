import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import WorkoutsPage from './components/WorkoutsPage';
import WorkoutsForm from './components/WorkoutsForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar/>
            <Container>
              <Route exact path="/" component={Welcome}/>
              <Route exact path="/workouts" component={WorkoutsPage}/>
              <Route exact path="/workouts/new" component={WorkoutsForm}/>
            </Container>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
