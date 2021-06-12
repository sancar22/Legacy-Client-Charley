import React from "react";
import { useSelector } from "react-redux";
import Logout from "../Logout/logout";
import * as styles from "./header.module.css";

const Header = () => {
  const username = useSelector((state) => state.username);

  return (
    <div className={styles.container}>
      <div>Welcome back chef {username}</div>
      <Logout />
    </div>
  );
};

export default Header;
