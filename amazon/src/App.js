import React from 'react';
import './App.css';
import Signin from './signin'
import Homepage from './homepage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>

     

    </div>
  );
}

export default App;
