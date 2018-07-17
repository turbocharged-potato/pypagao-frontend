import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CourseChoice = ({ course, disabled, onSubmit, onCodeChange, onAdd }) => (
  <Form onSubmit={onSubmit}>
    <FormGroup>
      <Label for="code">Course code</Label>
      <Input
        type="text"
        id="code"
        placeholder="Enter course code"
        onChange={onCodeChange}
        className={disabled ? 'd-none' : null}
      />
      <Input type="text" disabled value={course} className={disabled ? null : 'd-none'} />
    </FormGroup>
    <Button type="submit" className={disabled ? 'd-none' : 'm-1'}>
      Search
    </Button>
    <Button color="primary" className={disabled ? 'd-none' : 'm-1'} onClick={onAdd}>
      +
    </Button>
  </Form>
);

CourseChoice.propTypes = {
  course: PropTypes.string,
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  onCodeChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
};

CourseChoice.defaultProps = {
  disabled: false,
  course: ''
};

export default CourseChoice;
