import React from 'react';
import PropTypes from 'prop-types';
import { DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import LoginButton from './LoginButton';

const UserActions = ({ name, handleLogout, loggedIn }) => {
  const LoggedInDropdown = () => (
    <UncontrolledDropdown>
      <DropdownToggle caret>{name}</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
  return <div className="ml-auto">{loggedIn ? <LoggedInDropdown /> : <LoginButton />}</div>;
};

UserActions.propTypes = {
  name: PropTypes.string,
  handleLogout: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
};

UserActions.defaultProps = {
  name: 'Julius'
};

export default UserActions;
