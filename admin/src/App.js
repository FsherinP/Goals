import React, {Component} from 'react';
import {Router, Route, browserHistory, Redirect} from "react-router";
import Login from './Components/Login';
import Signup from './Components/Signup';
import User from './Components/User';
 
function App() {

  return (
    <Router history={browserHistory}>   
        <Redirect from="/" to="/Login" />
            <Route> 
        <Route exact path="/" component={Login}/>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/User" component={User} />
        </Route>
      </Router>
  );
}

export default App;