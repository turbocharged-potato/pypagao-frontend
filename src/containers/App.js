import React from 'react';
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap';
import LoginPage from '../containers/LoginPage';

const App = () => (
  <Container>
    <Navbar color="dark" dark expand>
      <NavbarBrand href="#">Pypagao</NavbarBrand>
      <NavbarToggler />
      <Collapse navbar>
        <Nav navbar>
          <NavItem active>
            <NavLink href="#">Login</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    <LoginPage />
  </Container>
);

export default App;
