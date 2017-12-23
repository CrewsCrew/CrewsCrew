import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Notifications from './Notifications';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/notifications" component={Notifications} />
        </Switch>
      </main>
    );
  }
}

export default Main;