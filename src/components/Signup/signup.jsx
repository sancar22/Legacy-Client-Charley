import React, { useState } from "react";
import { Link } from "gatsby";
import * as styles from "./signup.module.css";
import { attemptSignup } from "../../services/apiService";

const initialState = {
  email: "",
  password: "",
  username: "",
};

const Signup = () => {
  const [signup, setSignup] = useState(initialState);
  const [signupError, setSignupError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleLogin = ({ target }) => {
    setSignup((oldSignup) => ({ ...oldSignup, [target.name]: target.value }));
    setSignupError(false);
  };

  const validateForm = () => {
    return !signup.email || !signup.password || !signup.username;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await attemptSignup(signup);
    if (response.ok) {
      // user is authenticated state update to be here
      let json = await response.json();
      localStorage.setItem("accessToken", json.accessToken);
      console.log(json.newUser);
      setSignup(initialState);
      setSubmitSuccess(true);
    } else {
      setSignupError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="your email"
          value={signup.email}
          onChange={handleLogin}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={signup.password}
          onChange={handleLogin}
        />
        <input
          name="username"
          placeholder="username"
          value={signup.username}
          onChange={handleLogin}
        />

        {signupError ? (
          <p className={styles.errorText}>user already registered</p>
        ) : null}

        {submitSuccess ? (
          (
          <p className={styles.successText}>success! login to continue</p>
        )
        ) : null}

        <button type="submit" disabled={validateForm()}>
          signup
        </button>

        <Link to="/" className={styles.linkText}>
          click here to login
        </Link>
      </form>
    </div>
  );
};

export default Signup;
