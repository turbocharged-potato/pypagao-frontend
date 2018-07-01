import React from 'react';
import PropTypes from 'prop-types';
import {Button, Form, FormGroup} from 'reactstrap';

const PaperForm = ({disabled, onAdd, onChoose, papers}) => (
  <Form>
    <FormGroup>
      {papers.map(paper => (
        <Button
          onClick={() => onChoose(paper)}
          disabled={disabled}
          className="m-1">
          {paper.name}
        </Button>
      ))}
      <Button onClick={onAdd} color="primary" disabled={disabled}>+</Button>
    </FormGroup>
  </Form>
);

PaperForm.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onChoose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  papers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
};

PaperForm.defaultProps = {
  papers: [],
};

export default PaperForm;
