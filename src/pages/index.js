import * as React from 'react';

import Header from '../components/Header/header';
import Login from '../components/Login/login';
import "../styles/global.css";


const IndexPage = () => {
  return (
    <main>
      <Header/>
      <Login/>
    </main>
  )
}

export default IndexPage