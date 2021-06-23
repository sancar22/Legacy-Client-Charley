import React from 'react';
import { Link } from 'gatsby';

import * as styles from './navbar.module.css';

const NavBar = (): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.navElement}>
      <Link className={styles.text} to='/recipes'>
        my recipes
      </Link>
    </div>

    <div className={styles.navElement}>
      <Link className={styles.text} to='/profile'>
        home
      </Link>
    </div>

    <div className={styles.navElement}>
      <Link className={styles.text} to='/visitFriends'>
        visit friends
      </Link>
    </div>
  </div>
);

export default NavBar;
