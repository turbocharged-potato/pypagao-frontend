import React from 'react';
import PropTypes from 'prop-types';
import {DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown} from 'reactstrap';

const UserActions = ({name, handleLogout}) => (
  <div className="ml-auto">
    <UncontrolledDropdown>
      <DropdownToggle caret>
        {name}
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  </div>
);

UserActions.propTypes = {
  name: PropTypes.string,
  handleLogout: PropTypes.func.isRequired
};

UserActions.defaultProps = {
  name: 'Julius'
};

export default UserActions;
