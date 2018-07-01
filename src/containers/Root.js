import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {Container} from 'reactstrap';
import PypagaoNavBar from '../containers/PypagaoNavBar';
import App from './App';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import VerifyPage from './VerifyPage';

const RedirectToMain = () => (
  <Redirect to="/" />
)

const Root = () => (
  <Router>
    <div>
      <PypagaoNavBar />
      <Container fluid>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/verify" component={VerifyPage} />
          <Route component={RedirectToMain} />
        </Switch>
      </Container>
    </div>
  </Router>
);

export default Root;
