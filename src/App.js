import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/pages/Login";
import Result from "./components/pages/Result";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/result">
          <Result />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
