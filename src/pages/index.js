import * as React from 'react';

import Login from "../components/Auth/Login/login";
import "../styles/global.css";

const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to Chef Share</h1>
      <Login/>
    </main>
  )
}

export default IndexPage