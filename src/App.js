import React, { Component } from 'react';
import Navbar from './module/Navbar';
import SignUp from './module/SignUp';
import SignIn from './module/SignIn';
import Test from './components/trial/container/Contact';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/test" component={Test} /> 
          <Route path="/sign-up" component={SignUp} /> 
          <Route path="/sign-in" component={SignIn} /> 
          <Route path="/" component={Navbar} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
