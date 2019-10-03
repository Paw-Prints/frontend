import React from "react";
import "./App.css";
// import "antd/dist/antd.css"
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import NavBar from "./NavBar/NavBar";
=======
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './HomePage/HomePage';
import NavBar from './NavBar/NavBar';
import DisplaySearch from './DisplaySearch/DisplaySearch';
>>>>>>> 36909b6d06c9d3058dd07bbdf4f545c2b72e4e92

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
<<<<<<< HEAD
          <Route path="/" component={HomePage} />
=======
          <Route path="/home" component={HomePage} />
          <Route path="/display" component={DisplaySearch} />
          <Route path="/" component={NavBar} />
>>>>>>> 36909b6d06c9d3058dd07bbdf4f545c2b72e4e92
        </Switch>
      </Router>
    </div>
  );
}

export default App;
