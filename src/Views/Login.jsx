import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userLogin, userRegistration } from '../ApiService';
import { Container, Nav, Card, Tab, Modal } from 'react-bootstrap';
import ResetPassModal from '../components/ResetPassModal';
import './../scss/login.scss';
import {Eye, EyeFill,EyeSlashFill} from 'react-bootstrap-icons';

const Login = () => {
  const [match, setMatch] = useState(true);
  const [checked, setChecked] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    userLogin({
      email: e.target.email.value,
      password: e.target.password.value,
      checked,
    }).then(({ data }) => {
      if (data.status) {
        localStorage.setItem('token', data.token);
        toast.success(data.message);
        history.push('/dashboard');
      } else {
        toast.error(data.message);
      }
    });
  };

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleCheckboxChange = () => setChecked(!checked);

  const onSignup = (e) => {
    e.preventDefault();
    if (e.target.password.value === e.target.repeatPassword.value) {
      setMatch(true);
      const registrationDetails = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      };
      userRegistration(registrationDetails).then(({ data }) => {
        console.log(data);
        if (data.status) {
          toast.success(data.message);
          e.target.name.value = '';
          e.target.email.value = '';
          e.target.password.value = '';
          e.target.repeatPassword.value = '';
          history.push('/login');
        } else {
          toast.error('Error');
        }
      });
    } else {
      setMatch(false);
    }
  };

  return (
    <div className="row login_contanier mx-0">
      <div className="col-lg-6 col-md-6 col-sm-12 pl-0 position-relative">
        <img
          src="./../../img/bg_web-02.png"
          className="login_main_img"
          alt=""
        />
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
                        <p className="text-left mb-4">
                          Use your credentials to login into account.
                        </p>
                        <div>
                          <label className="sr-only">Email address</label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email address"
                            required
                          />
                          {/* <label className="sr-only">Password</label>
                          <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            required
                          /> */}
                          <div className="input-group">
                            <input type={showPassword ? 'text' : 'password'} name="password" className="form-control" placeholder="Password" required />
                            <div className="input-group-btn">
                              <div onClick={handleShowPassword} className="btn btn-default">
                                {showPassword ? <EyeFill color="#ff801e"/> : <EyeSlashFill color="#ff801e"/> }
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="checkbox text-left mb-3">
                          <label>
                            <input
                              type="checkbox"
                              name="remember"
                              defaultChecked={checked}
                              onChange={handleCheckboxChange}
                            />{' '}
                            Remember me
                          </label>
                        </div>
                        <div className="text-right mb-3">
                          <a
                            className="forgot_link"
                            onClick={() => setModalShow(true)}
                          >
                            Forgot Password ?
                          </a>
                        </div>
                        <button
                          className="btn btn-lg btn-primary btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                      </form>
                    </Tab.Pane>
                    <Tab.Pane eventKey="register">
                      <form onSubmit={onSignup} className="form_signin">
                        <p className="text-left mb-4">
                          Enter your information to setup a new account.
                        </p>

                        <label className="sr-only">Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          required
                        />

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
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          className="form-control"
                          placeholder="Password"
                          required
                        />

                        <label className="sr-only">Repeat Password</label>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="repeatPassword"
                          className="form-control"
                          placeholder="Repeat Password"
                          required
                        />
                        {match ? (
                          ''
                        ) : (
                          <p style={{ color: 'red' }}>Passwords do not match</p>
                        )}
                        <div className="checkbox text-left mt-3">
                          <label>
                            <input
                              type="checkbox"
                              name="showPassword"
                              defaultChecked={showPassword}
                              onChange={handleShowPassword}
                            />{' '}
                            Show Password
                          </label>
                        </div>
                        <button
                          className="btn btn-lg btn-primary btn-block"
                          type="submit"
                        >
                          Register
                        </button>
                        <div className="text-right mb-3">
                          <a className="forgot_link" href="#">
                            Already have an account ?
                          </a>
                        </div>
                      </form>
                    </Tab.Pane>
                  </Tab.Content>
                </Card.Body>
              </Card>
            </Tab.Container>
          </div>
        </div>
      </div>
      <ResetPassModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Login;
