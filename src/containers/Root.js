import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'reactstrap';
import PypagaoNavBar from '../containers/PypagaoNavBar';
import App from './App';
import LoginPage from './LoginPage';

const Root = () => (
  <Router>
    <div>
      <PypagaoNavBar />
      <Container fluid>
        <Route exact path="/" component={App} />
        <Route path="/login" component={LoginPage} />
      </Container>
    </div>
  </Router>
);

export default Root;
