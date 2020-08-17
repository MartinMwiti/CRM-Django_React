import React, { useState, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// Alert
import Alerts from "../../hocs/Alerts";

// component
import { login } from "../../actions/auth";

const SignIn = ({ login, isAuthenticated }) => {
  const [formData, setformData] = useState({
    email: "admin@test.com", // email: "",
    password: "passwd123", // password: ""
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setformData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  // If the user authenticated
  // Redirect to the home page
  if (isAuthenticated) {
    // Persists a page after login in based on the value in the local storage
    // The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
    const link = `/${localStorage.getItem("selectedItem") ?? 'Dashboard'}`
    return <Redirect to={link} />;
  }

  return (
    <Fragment>
      <Alerts />
      <Helmet>
        <style>{"body { background-color: white; }"}</style>
        <title>Login Page</title>
      </Helmet>
      <div className="loginContainer">
        <form onSubmit={(e) => onSubmit(e)} className="loginForm">
          <h1>Login</h1>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
              required
            />
          </div>
          <input type="submit" name="" value="Login" />

          <p>
            Don't have an account?{" "}
            <Link id="loginLink" to="/login/#">
              Sign Up
            </Link>
          </p>
          <p>
            Forgot Your Password?{" "}
            <Link id="loginLink" to="/login/#">
              Reset Password
            </Link>
          </p>
        </form>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(SignIn);


