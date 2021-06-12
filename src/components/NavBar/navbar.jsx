import { navigate } from "gatsby";
import React from "react";
import * as styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navElement} onClick={() => navigate("/recipes")}>
        my recipes
      </div>
      <div className={styles.navElement} onClick={() => navigate("/profile")}>
        home
      </div>
      <div className={styles.navElement}>visit friends</div>
    </div>
  );
};

export default NavBar;
