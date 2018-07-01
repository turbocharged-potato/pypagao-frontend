import React from 'react';
import PropTypes from 'prop-types';
import {Navbar, NavbarBrand} from 'reactstrap';
import UserActions from './UserActions';

const PypagaoNavBarComponent = ({loggedIn, name, handleLogout}) => (
  <Navbar color="dark" dark expand>
    <NavbarBrand href="#">Pypagao</NavbarBrand>
    {loggedIn ? <UserActions name={name} handleLogout={handleLogout} /> : null}
  </Navbar>
);

PypagaoNavBarComponent.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  name: PropTypes.string,
};

PypagaoNavBarComponent.defaultProps = {
  name: null,
};

export default PypagaoNavBarComponent;
