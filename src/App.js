import React from 'react';
import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './HomePage/HomePage';
import NavBar from './NavBar/NavBar';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/" component={NavBar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
