import React from "react";
import { navigate } from "gatsby";
import { useDispatch } from "react-redux";
import { logout } from "../../services/apiService";
import { logout_user } from "../../state/actions";
import * as styles from "./logout.module.css";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logout("accessToken");
    dispatch(logout_user());
    navigate("/");
  };

  return (
    <div>
      <div onClick={handleLogout} className={styles.logout}>
        logout
      </div>
    </div>
  );
};

export default Logout;
