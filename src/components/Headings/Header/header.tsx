import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'src/interfaces';
import Logout from '../../Auth/Logout/logout';
import logo from '../../../images/smallhat.png';
import * as styles from './header.module.css';

const Header = (): JSX.Element => {
  const username = useSelector<IState>((state) => state.username);
  return (
    <div className={styles.container}>
      <div className={styles.left__container}>
        <img src={logo} alt='logo' className={styles.logo} />
        {username && (
          <div>
            Welcome back chef <span className={styles.name}>{username}</span>
          </div>
        )}
      </div>
      <Logout />
    </div>
  );
};

export default Header;
