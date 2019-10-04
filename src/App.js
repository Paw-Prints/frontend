import React from 'react';
import './App.css';
// import "antd/dist/antd.css"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './HomePage/HomePage';
import NavBar from './NavBar/NavBar';
import DisplaySearch from './DisplaySearch/DisplaySearch';
import DogProfile from './DogProfile/DogProfile';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/display/:dogid" component={DogProfile}/>
          <Route path="/display" component={DisplaySearch} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
