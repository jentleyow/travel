import React, { Component } from 'react';
import Main from './main/Main';
import Navbar from './navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
