import React from 'react';
import PropTypes from 'prop-types';
import {Button, Form, FormGroup} from 'reactstrap';

const SemesterForm = ({disabled, onAdd, onChoose, semesters}) => (
  <Form>
    <FormGroup>
      {semesters.map(semester => (
        <Button
          onClick={() => onChoose(semester)}
          disabled={disabled}
          className="m-1">
          {semester.start_year}/{semester.end_year} Semester {semester.number}
        </Button>
      ))}
      <Button onClick={onAdd} color="primary" disabled={disabled}>+</Button>
    </FormGroup>
  </Form>
);

SemesterForm.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onChoose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  semesters: PropTypes.arrayOf(
    PropTypes.shape({
      start_year: PropTypes.number.isRequired,
      end_year: PropTypes.number.isRequired,
      number: PropTypes.number.isRequired,
    }),
  ),
};

SemesterForm.defaultProps = {
  semesters: [],
};

export default SemesterForm;
