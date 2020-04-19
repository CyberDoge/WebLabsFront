import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/pages/Login";
import Result from "./components/pages/Result";
import MainPage from "./components/pages/MainPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/result">
          <Result/>
        </Route>
        <Route path="/">
          <MainPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
