import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onchange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onsubmit = e => {
    e.preventDefault();
    console.log("Success");
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={e => onsubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={e => onchange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            minLength="6"
            value={password}
            onChange={e => onchange(e)}
          />
        </div>
        <input type="submit" value="Login" className="btn btn-primary" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  );
};

export default Login;
