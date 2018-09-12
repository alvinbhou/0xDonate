import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
import styled from 'styled-components';
import Home from 'containers/Home';
import Donate from 'containers/Donate';
import Notifications from 'containers/Notification';

const Background = styled.div`
  background-color: #555;
`
class RootRouter extends React.Component {
  render () {
    return(
      <Router>
        <Background>
          <Route exact path='/' component={Home} />
          <Route path='/donate' component={Donate} />
          <Route path='/noti' component={Notifications} />
        </Background>
      </Router>
    );
  }
}

export default RootRouter;
