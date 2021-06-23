import React from 'react';
import { navigate } from 'gatsby';
import { useDispatch } from 'react-redux';

import { logout_user } from '../../../state/actions';
import apiService from '../../../services/apiService';

import * as styles from './logout.module.css';

const Logout = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await apiService.logout();
      dispatch(logout_user());
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div onClick={handleLogout} aria-hidden='true' className={styles.logout}>
      logout
    </div>
  );
};

export default Logout;
