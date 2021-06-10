import React, { useState } from "react";
import { Link } from "gatsby";
import * as styles from "./login.module.css";

import { attemptLogin } from "../../services/apiService";


const initialState = {
  email: '',
  password: ''
}


const Login = () => {

  const [login, setLogin] = useState(initialState);


  const handleLogin = ({target}) => {
    setLogin(oldLogin => ({...oldLogin, [target.name]:target.value}))
  };
  const validateForm = () => {
    return !login.email || !login.password;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    attemptLogin(login);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="your email"
          value={login.email}
          onChange={handleLogin}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={login.password}
          onChange={handleLogin}
          />
        <button
          type="submit"
          disabled={validateForm()}
        >
          login
        </button>
        <Link to="/signup" className = {styles.linkText}>click here to sign up</Link>
      </form>
    </div>
  );
};

export default Login;
