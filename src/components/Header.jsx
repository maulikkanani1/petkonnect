import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  NavDropdown,
  Button,
  FormControl,
  InputGroup,
} from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">24 * 7 Support</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar className="bg-light justify-content-between">
        <div>
          <Navbar.Brand>
            <img src="./../../img/logo.png" />
          </Navbar.Brand>
        </div>
        <div className="d-flex">
          <Nav.Link className="text-dark" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="text-dark" href="#home">
            Feed
          </Nav.Link>
          <Nav.Link className="text-dark" href="#home">
            Store
          </Nav.Link>
          <Nav.Link className="text-dark" href="#home">
            Services
          </Nav.Link>
          <Nav.Link className="text-dark" href="#home">
            SOS
          </Nav.Link>
        </div>
        <div className="d-flex">
          <i class="fas fa-search text-primary mr-3"></i>
          <i class="fas fa-shopping-cart text-primary mr-3"></i>
          <i class="fas fa-bell text-primary"></i>
        </div>
      </Navbar>
    </Container>
  );
};

export default Header;
