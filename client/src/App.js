import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import WorkoutsPage from './components/WorkoutsPage';
import WorkoutsForm from './components/WorkoutsForm';
import WorkoutShow from './components/WorkoutShow';
import SuggestedWorkoutsPage from './components/SuggestedWorkoutsPage';

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
              <Switch>
                <Route exact path="/workouts/new" component={WorkoutsForm}/>
                <Route path="/workouts/:workoutId" component={WorkoutShow}/>
              </Switch>
              <Route exact path="/help" component={SuggestedWorkoutsPage}/>
            </Container>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
