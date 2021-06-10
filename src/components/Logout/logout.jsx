import React from "react";
import { navigate } from "gatsby";
import { useDispatch } from "react-redux";
import { logout } from "../../services/apiService";
import { logout_user } from "../../state/actions";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logout("accessToken");
    dispatch(logout_user());
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleLogout}>log out !!!!</button>
    </div>
  );
};

export default Logout;
