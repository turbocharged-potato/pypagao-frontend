import React from 'react';
import PropTypes from 'prop-types';
import {Button, Form, FormFeedback, FormGroup, Label, Input} from 'reactstrap';

const RegisterForm = ({
  onRegister,
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onPasswordConfirmationChange,
  onUniversityChange,
  universities,
  formValid,
  nameValid,
  emailValid,
  passwordConfirmationValid
}) => (
  <Form onSubmit={onRegister}>
    <FormGroup>
      <Label for="name">Name</Label>
      <Input
        type="text"
        id="name"
        placeholder="Enter name"
        onChange={onNameChange}
        invalid={!nameValid}
      />
      <FormFeedback>Name cannot be blank</FormFeedback>
    </FormGroup>
    <FormGroup>
      <Label for="university">University</Label>
      <Input type="select" id="university" onChange={onUniversityChange}>
        {universities.map(university => <option value={university.id}>{university.name}</option>)}
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for="email">Email</Label>
      <Input
        type="email"
        id="email"
        placeholder="Enter email"
        onChange={onEmailChange}
        invalid={!emailValid}
      />
      <FormFeedback>Please enter a valid email address</FormFeedback>
    </FormGroup>
    <FormGroup>
      <Label for="password">Password</Label>
      <Input
        type="password"
        id="password"
        placeholder="Password"
        onChange={onPasswordChange}
      />
    </FormGroup>
    <FormGroup>
      <Label for="password_confirmation">Password Confirmation</Label>
      <Input
        type="password"
        id="password_confirmation"
        placeholder="Password"
        onChange={onPasswordConfirmationChange}
        invalid={!passwordConfirmationValid}
      />
      <FormFeedback>Password and password confirmation must match!</FormFeedback>
    </FormGroup>
    <Button color="primary" type="submit" disabled={!formValid}>
      Register
    </Button>
  </Form>
);

RegisterForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onPasswordConfirmationChange: PropTypes.func.isRequired,
  onUniversityChange: PropTypes.func.isRequired,
  universities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ),
  isValid: PropTypes.bool.isRequired
}.isRequired;

export default RegisterForm;
