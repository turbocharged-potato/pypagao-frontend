import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from 'reactstrap';

const CourseModal = ({ isOpen, toggle, onCodeChange, onSubmit }) => (
  <Modal isOpen={isOpen} toggle={toggle}>
    <Form onSubmit={onSubmit}>
      <ModalHeader toggle={toggle}>Add New Course</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="code">Course code</Label>
          <Input type="text" id="code" placeholder="CS1101S" onChange={onCodeChange} />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" type="submit">
          OK
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Form>
  </Modal>
);

CourseModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onCodeChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default CourseModal;
