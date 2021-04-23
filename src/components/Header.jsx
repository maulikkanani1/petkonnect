import React, { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  NavDropdown,
  Button,
  FormControl,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

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
    <div className="bg-white sticky-top">
      <div className="bg-light mb-2">
        <Container>
          <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="d-flex align-items-center">
                <div>
                  <img src="./../../img/logo new.png" style={{ width: "150px", marginRight: "13px" }} />
                </div>
                <div className="ml-3 text-center d-flex flex-column" style={{ marginRight: "10px", width: "14%" }}>
                  <span style={{ fontSize: "12px" }}>Deliver to Jasmine</span>
                  <span style={{ fontSize: "10px", fontWeight: "600" }}>
                    <i className="fas fa-map-marker-alt"></i> Navi Mumbai 400001
                  </span>
                </div>
                <div className="d-flex ml-3 mr-3">
                  <InputGroup style={{ textAlign: "center" }}>
                    <DropdownButton
                      as={InputGroup.Prepend}
                      variant="outline-secondary"
                      title="All"
                      id="input-group-dropdown-1"
                    >
                      <Dropdown.Item href="#">Item 1</Dropdown.Item>
                      <Dropdown.Item href="#">Item 1</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#">Item 1</Dropdown.Item>
                    </DropdownButton>
                    <FormControl aria-describedby="basic-addon1" />
                    <InputGroup.Append>
                      <InputGroup.Text>
                        <i className="fas fa-search text-primary cursor-pointer"></i>
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </div>
                <div className="ml-3 d-flex" style={{ fontSize: "25px", marginLeft: "5px", flexDirection: "row" }}>
                  <i className="fas fa-shopping-bag text-primary cursor-pointer mr-3"></i>
                  <i className="fas fa-bell text-primary cursor-pointer mr-3"></i>
                </div>
                <div
                  className="pl-3 pr-3 text-center small"
                  style={{ borderRight: "1px solid grey", borderLeft: "1px solid grey" }}
                >
                  <span> 24 * 7 Support</span>
                </div>

                <div className="ml-4">
                  <Link to="/Profile">
                    <img src={"./../../img/profile_img_2.png"} width="30px" className="pt-1" />
                  </Link>
                </div>

                <NavDropdown title={userData ? userData.name : "Hello User"} id="basic-nav-dropdown">
                  <NavDropdown.Item href="javascript:void(0)" onClick={() => history.push("/OrderDetails")}>
                    Order History
                  </NavDropdown.Item>
                  <NavDropdown.Item href="javascript:void(0)" onClick={() => logout()}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>

      <Navbar className="bg-white justify-content-center">
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
          <Nav.Link className="text-primary" href="/checkout">
            Cart
            <i
              className="fas fa-shopping-cart text-primary mr-3 cursor-pointer"
              onClick={() => {
                history.push("/checkout");
              }}
            ></i>
          </Nav.Link>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
