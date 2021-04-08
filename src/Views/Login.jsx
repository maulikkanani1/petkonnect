import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { venderLogin } from "../ApiService";

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
    <div className="text-center">
      <form onSubmit={onSubmit} className="form-signin">
        <img
          className="mb-4"
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          alt=""
          width={72}
          height={72}
        />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label className="sr-only">Email address</label>
        <input type="email" name="email" className="form-control" placeholder="Email address" required autofocus />
        <label className="sr-only">Password</label>
        <input type="password" name="password" className="form-control" placeholder="Password" required />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" defaultValue="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
