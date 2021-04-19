import React from "react";
import { Container, Navbar, Nav, Form, NavDropdown, Button, FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../ApiService";

const Footer = () => {
  const history = useHistory();

  return (
    <div className="foot_bg p-2 mt-5 ">
        <h5 className="text-primary text-center mt-5">  </h5>
        <br />
        <br />
        <br />
        <h5 className="text-primary text-center mt-5">  </h5>
        <div className="row my-5 mx-0">
          <div className="col-12 brand_container">
          </div>
        </div>
      </div>
  );
};

export default Footer;
