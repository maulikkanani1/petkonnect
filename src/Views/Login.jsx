import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { venderLogin } from "../ApiService";
import { Container, Nav, Card } from "react-bootstrap";
import "./../scss/login.scss";

const Login = () => {
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    venderLogin({
      vendorEmail: e.target.email.value,
      vendorPassword: e.target.password.value,
    }).then(({ data }) => {
      if (data.vendor) {
        localStorage.setItem("token", data.token);
        toast.success("Login success");
        history.push("/dashboard");
      } else {
        toast.error(data);
      }
    });
  };
  return (
    <div>
      <div className="row login_contanier">
        <div className="col-lg-3 col-md-4 col-sm-12">
          <img className="login_img" src="./../../img/bg_img_login_1.png" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 ml-5">
          <form onSubmit={onSubmit} className="form_signin">
            <img className="mb-4" src="./../../img/logo.png" alt="" />

            <Card className="mt-4">
              <Card.Header className="bg-transparent border-0">
                <Nav
                  activeKey="/login"
                  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                  <Nav.Item>
                    <Nav.Link href="/login">Login</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">Register</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <p className="text-left mb-4">
                  Use your credentials to login into account.
                </p>
                <label className="sr-only">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email address"
                  required
                  autofocus
                />
                <label className="sr-only">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  required
                />
                <div className="checkbox text-left mb-3">
                  <label>
                    <input type="checkbox" defaultValue="remember-me" />{" "}
                    Remember me
                  </label>
                </div>
                <div className="text-right mb-3">
                  <a className="forgot_link" href="#">
                    Forgot Password ?
                  </a>
                </div>
                <button
                  className="btn btn-lg btn-primary btn-block"
                  type="submit"
                >
                  Login
                </button>
              </Card.Body>
            </Card>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
