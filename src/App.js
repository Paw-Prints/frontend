import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Display from "./DisplaySearch/DisplaySearch";
import Pet from "./DisplaySearch/Pet";
import NavBar from "./NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/display" component={Display} />
          {/* <Route exact path="/display/:id" component={Pet} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
