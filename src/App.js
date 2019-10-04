import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import NewComponent from "./DisplaySearch/NewComponent";
import Display from "./DisplaySearch/DisplaySearch";
import NavBar from "./NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/display" component={Display} />
          <Route exact path="/display/:id" component={NewComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
