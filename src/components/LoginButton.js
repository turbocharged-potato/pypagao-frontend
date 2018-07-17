import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

const LoginButton = withRouter(({ history }) => (
  <Button onClick={() => history.push('/login')}>Login</Button>
));

export default LoginButton;
