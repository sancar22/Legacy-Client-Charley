import React from "react";
import * as styles from "./header.module.css";

const Header = ({ username, logout }) => {
  return (
    <div className={styles.container}>
      <div>Welcome back chef {username}</div>
      {logout}
    </div>
  );
};

export default Header;
