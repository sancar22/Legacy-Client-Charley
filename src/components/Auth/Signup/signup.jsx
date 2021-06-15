import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import { useDispatch } from "react-redux";
import apiService from "../../../services/apiService";
import { set_is_authenticated } from "../../../state/actions";
import logo from "../../../images/bighat.png";
import * as styles from "./signup.module.css";


const initialState = {
  email: "",
  password: "",
  username: "",
};
const Signup = () => {
  const [signup, setSignup] = useState(initialState);
  const [signupError, setSignupError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const dispatch = useDispatch();

  const handleLogin = ({ target }) => {
    setSignup((oldSignup) => ({ ...oldSignup, [target.name]: target.value }));
    setSignupError(false);
  };
  const validateForm = () => {
    return !signup.email || !signup.password || !signup.username;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await apiService.attemptSignup(signup);

    if (response.ok) {
      let json = await response.json();
      localStorage.setItem("accessToken", json.accessToken);
      dispatch(set_is_authenticated());
      setSignup(initialState);
      navigate("/profile");
    } else {
      if (response.status === 403) {
        setErrorText("This email is already in use by another account");
      } else if (response.status === 409) {
        setErrorText("This username is already taken");
      } else {
        setErrorText("Sign up error, please try again");
      }
      setSignupError(true);
    }
  };

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} alt='logo'/>
      <form onSubmit={handleSubmit} className={styles.signupForm}>
        <p className={styles.title}>chef signup</p>
        <input
          type="email"
          name="email"
          placeholder="email"
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

        {signupError ? <p className={styles.errorText}>{errorText}</p> : null}

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
