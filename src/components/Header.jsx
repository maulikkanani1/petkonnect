import React from "react";
import { Container, Navbar, Nav, Form, NavDropdown, Button, FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { logout } from "../ApiService";

const Header = () => {
  const history = useHistory();

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">24 * 7 Support</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#" onClick={() => logout()}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar className="bg-white justify-content-between">
        <div>
          <Navbar.Brand>
            <img src="./../../img/logo.png" />
          </Navbar.Brand>
        </div>
        <div className="d-flex">
          <Nav.Link className="text-dark" href="/dashboard">
            Home
          </Nav.Link>
          <Nav.Link className="text-dark" href="#">
            Feed
          </Nav.Link>
          <Nav.Link className="text-dark" href="#">
            Store
          </Nav.Link>
          <Nav.Link className="text-dark" href="#">
            Services
          </Nav.Link>
          <Nav.Link className="text-dark" href="#">
            SOS
          </Nav.Link>
        </div>
        <div className="d-flex">
          <i class="fas fa-search text-primary cursor-pointer mr-3"></i>
          <i
            class="fas fa-shopping-cart text-primary mr-3 cursor-pointer"
            onClick={() => {
              history.push("/checkout");
            }}
          ></i>
          <i class="fas fa-bell cursor-pointer text-primary"></i>
        </div>
      </Navbar>
    </Container>
  );
};

export default Header;
