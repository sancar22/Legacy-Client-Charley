import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Headings/Header/header';
import NavBar from '../components/Headings/NavBar/navbar';


const VisitFriendsPage = () => {
  const isAuthenticated = useSelector(state => state.isAuthenticated);


  return ( <>
    {
      isAuthenticated  &&  <>
        <Header/>
        <NavBar/>
        <div>i'm here on visit friends</div>
      </>

    }
    </>
  );
}

export default VisitFriendsPage;