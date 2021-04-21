import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, Form, NavDropdown, Button, FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { GetUserData, logout } from "../ApiService";

const Header = () => {
  const history = useHistory();
  const [userData, setuserData] = useState();

  useEffect(() => {
    GetUserData().then(({ data }) => {
      setuserData(data);
    });
  }, []);

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="javascript:void(0)">24 * 7 Support</Nav.Link>
            <Link to="/Profile">
              <img src={"./../../img/profile_img_2.png"} width="30px" className="pt-1" />
            </Link>
            <NavDropdown title={userData ? userData.name : "Hello User"} id="basic-nav-dropdown">
              <NavDropdown.Item href="javascript:void(0)" onClick={() => history.push("/OrderDetails")}>
                Order History
              </NavDropdown.Item>
              <NavDropdown.Item href="javascript:void(0)" onClick={() => logout()}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar className="bg-white justify-content">
        <div>
          <Navbar.Brand>
            <img src="./../../img/logo new.png" />
          </Navbar.Brand>
        </div>
        <div className="d-flex">
          <Nav.Link className="text-dark" as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link className="text-dark" href="#">
            Feed
          </Nav.Link>
          <Nav.Link className="text-primary" as={Link} to="/">
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
          {/*<i className="fas fa-search text-primary cursor-pointer mr-3"></i> */}
          <Nav.Link className="text-primary" href="/checkout">
            Cart
            <i
              className="fas fa-shopping-cart text-primary mr-3 cursor-pointer"
              onClick={() => {
                history.push("/checkout");
              }}
            ></i>
          </Nav.Link>

          {/* <i className="fas fa-bell cursor-pointer text-primary"></i>*/}
        </div>
      </Navbar>
    </Container>
  );
};

export default Header;
