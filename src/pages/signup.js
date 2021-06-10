import React from 'react';
import {Link} from 'gatsby';
import Signup from '../components/Signup/signup';
import Header from '../components/Header/header';


const SignupPage = () => {
  return (
    <main>
      <Header/>
      <Signup/>
      <Link to='/'>login</Link>
  </main>
  );
}

export default SignupPage;