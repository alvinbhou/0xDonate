import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from 'containers/Home';
import Setting from 'containers/Setting';
import Donate from 'containers/Donate';
import Footer from 'components/Footer';


const Background = styled.div`
  background-color: #555;
`
const RootRouter = () => (
  <Router>
    <Background>
      <Route exact path='/' component={Home} />
      <Route path='/donate' component={Donate} />
      <Footer />
    </Background>
  </Router>
);

export default RootRouter;