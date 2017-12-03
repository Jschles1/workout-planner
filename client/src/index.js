import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.css'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// Allows us to dispatch multiple actions in a single action creator
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Create redux store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)  
)

ReactDOM.render(
  // Give react app ability to be connected to the store via Provider
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
