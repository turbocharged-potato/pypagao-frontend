import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from 'reactstrap';

const SemesterModal = ({
  isOpen,
  toggle,
  onStartYearChange,
  onEndYearChange,
  onNumberChange,
  onSubmit
}) => (
  <Modal isOpen={isOpen} toggle={toggle}>
    <ModalHeader toggle={toggle}>Add New Semester</ModalHeader>
    <ModalBody>
      <Form>
        <FormGroup>
          <Label>Semester</Label>
          <InputGroup>
            <Input type="number" id="start_year" placeHolder="2017" onChange={onStartYearChange} />
            <InputGroupAddon className="input-group-prepend input-group-append">
              <InputGroupText>/</InputGroupText>
            </InputGroupAddon>
            <Input type="number" id="end_year" placeholder="2018" onChange={onEndYearChange} />
            <InputGroupAddon className="input-grou-prepend input-group-append">
              <InputGroupText>Semester</InputGroupText>
            </InputGroupAddon>
            <Input type="number" id="number" placeholder="1" onChange={onNumberChange} />
          </InputGroup>
        </FormGroup>
      </Form>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={onSubmit}>
        OK
      </Button>
      <Button color="secondary" onClick={toggle}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
);

SemesterModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onStartYearChange: PropTypes.func.isRequired,
  onEndYearChange: PropTypes.func.isRequired,
  onNumberChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SemesterModal;
