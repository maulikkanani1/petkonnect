import React from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { userLogin } from "../ApiService";
import { Container, Nav, Card, Tab } from "react-bootstrap";
import "./../scss/login.scss";

const Login = () => {
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    userLogin({
      email: e.target.email.value,
      password: e.target.password.value,
    }).then(({ data }) => {
      if (data.user) {
        localStorage.setItem("token", data.token);
        toast.success("Login success");
        history.push("/dashboard");
      } else {
        toast.error(data);
      }
    });
  };

  return (
    <div className="row login_contanier mx-0">
      <div className="col-lg-6 col-md-6 col-sm-12 pl-0 position-relative">
        <img src="./../../img/bg_web-02.png" className="login_main_img" alt="" />
        <div className="login_sec_div">
          <img src="./../../img/Layer_2.png" className="login_sec_img" alt="" />
          <div className="ml-5">
            <h1 className="heading">FOR</h1>
            <h1 className="heading">LOVE</h1>
            <h1 className="heading">BEYOND</h1>
            <h1 className="heading">WORDS</h1>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 ">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="d-flex justify-content-center">
              <img className="mb-4" src="./../../img/logo new.png" alt="" />
            </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="login">
              <Card className="mt-4">
                <Card.Header className="bg-transparent border-0">
                  <Nav variant="tab">
                    <Nav.Item>
                      <Nav.Link eventKey="login">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="register">Register</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body>
                  <Tab.Content>
                    <Tab.Pane eventKey="login">
                      <form onSubmit={onSubmit} className="form_signin">
                        <p className="text-left mb-4">Use your credentials to login into account.</p>
                        <label className="sr-only">Email address</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email address"
                          required
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
                            <input type="checkbox" name="remember" defaultValue="remember-me" /> Remember me
                          </label>
                        </div>
                        <div className="text-right mb-3">
                          <a className="forgot_link" href="#">
                            Forgot Password ?
                          </a>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">
                          Login
                        </button>
                      </form>
                    </Tab.Pane>
                    <Tab.Pane eventKey="register">
                      <p className="text-left mb-4">Enter your information to setup a new account.</p>

                      <label className="sr-only">Username</label>
                      <input type="text" name="username" className="form-control" placeholder="Username" required />

                      <label className="sr-only">Email address</label>
                      <input type="email" name="email" className="form-control" placeholder="Email address" required />

                      <label className="sr-only">Password</label>
                      <input type="password" name="password" className="form-control" placeholder="Password" required />

                      <button className="btn btn-lg btn-primary btn-block" type="submit">
                        Register
                      </button>
                      <div className="text-right mb-3">
                        <a className="forgot_link" href="#">
                          or login within
                        </a>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Card.Body>
              </Card>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
