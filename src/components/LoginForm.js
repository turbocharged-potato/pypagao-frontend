import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LoginForm = ({ onLogin, onEmailChange, onPasswordChange }) => (
  <Form onSubmit={onLogin}>
    <FormGroup>
      <Label for="email">Email</Label>
      <Input type="email" id="email" placeholder="Enter email" onChange={onEmailChange} />
    </FormGroup>
    <FormGroup>
      <Label for="password">Password</Label>
      <Input type="password" id="password" placeholder="Password" onChange={onPasswordChange} />
    </FormGroup>
    <Button color="primary" type="submit">
      Login
    </Button>
  </Form>
);

LoginForm.propTypes = PropTypes.shape({
  onLogin: PropTypes.func,
  onUsernameChange: PropTypes.func,
  onPasswordChange: PropTypes.func
}).isRequired;

export default LoginForm;
