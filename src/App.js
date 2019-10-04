import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './HomePage/HomePage';
import DisplaySearch from './DisplaySearch/DisplaySearch';
import DogProfile from './DogProfile/DogProfile';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/display/:dogid" component={DogProfile}/>
          <Route exact path="/display" component={DisplaySearch} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
