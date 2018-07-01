import React from 'react';
import PropTypes from 'prop-types';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const CourseForm = ({course, disabled, onSubmit, onCodeChange}) => (
  <Form onSubmit={onSubmit}>
    <FormGroup>
      <Label for="code">Course code</Label>
      <Input
        type="text"
        id="code"
        placeholder="Enter course code"
        onChange={onCodeChange}
        disabled={disabled}
        value={course}
      />
    </FormGroup>
    <Button
      color="primary"
      type="submit"
      className={disabled ? 'd-none' : null}>
      Submit
    </Button>
  </Form>
);

CourseForm.propTypes = {
  course: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCodeChange: PropTypes.func.isRequired,
};

CourseForm.defaultProps = {
  course: ''
}

export default CourseForm;
