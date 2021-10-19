import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";

export default function BugTracker() {
  console.log("Rendering BugTracker");
  return (
    <Router>
      <Switch>
        <div className="App">
          <div className="App-header">
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </div>
        </div>
      </Switch>
    </Router>
  );
}
