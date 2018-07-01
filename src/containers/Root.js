import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'reactstrap';
import PypagaoNavBar from '../containers/PypagaoNavBar';
import App from './App';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const Root = () => (
  <Router>
    <div>
      <PypagaoNavBar />
      <Container fluid>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Container>
    </div>
  </Router>
);

export default Root;
