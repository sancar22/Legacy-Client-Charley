import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import { useDispatch } from "react-redux";

import * as styles from "./login.module.css";
import { attemptLogin} from "../../../services/apiService";

import { set_is_authenticated } from "../../../state/actions";


const initialState = {
  email: '',
  password: ''
}

const Login = () => {

  const [login, setLogin] = useState(initialState);
  const [loginError, setLoginError] = useState(false);
  const dispatch = useDispatch();


  const handleLogin = ({target}) => {
    setLogin(oldLogin => ({...oldLogin, [target.name]:target.value}))
    setLoginError(false);
  };

  const validateForm = () => {
    return !login.email || !login.password;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await attemptLogin(login);
    if (response.ok) {
      dispatch(set_is_authenticated());
      let json = await response.json();
      localStorage.setItem('accessToken', json.accessToken);
      setLogin(initialState);
      navigate('/profile');

    } else {
      setLoginError(true);
    }
  };


  return (
    <div >
      <form onSubmit={handleSubmit} className={styles.loginForm}>
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

        {loginError ? (
          <p className={styles.errorText}>user name or password is invalid</p>
        ) : null}

        <button type="submit" disabled={validateForm()}>
          login
        </button>

        <Link to="/signup" className={styles.linkText}>
          click here to sign up
        </Link>
      </form>
    </div>
  );
};

export default Login;
