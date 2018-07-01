import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {Button, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown} from 'reactstrap';


const UserActions = ({name, handleLogout, loggedIn}) => {
  const LoggedInDropdown = () => (
    <UncontrolledDropdown>
      <DropdownToggle caret>
        {name}
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>);
  const LoginButton = withRouter(({history}) => (
    <Button onClick={() => history.push('/login')}>Login</Button>
  ));
  return (
    <div className="ml-auto">
      {loggedIn ? <LoggedInDropdown /> : <LoginButton />}
    </div>)
};

UserActions.propTypes = {
  name: PropTypes.string,
  handleLogout: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

UserActions.defaultProps = {
  name: 'Julius'
};

export default UserActions;
