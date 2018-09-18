import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Home from 'containers/Home';
import Donate from 'containers/Donate';
import Notifications from 'containers/Notification';
import History from 'containers/History'
import NotFound from 'containers/NotFound';

class RootRouter extends React.Component {
  render () {
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/donate' component={Donate} />
          <Route path='/noti' component={Notifications} />
          <Route path='/history' component={History} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default RootRouter;
