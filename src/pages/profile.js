import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfileData } from '../services/apiService';
import { set_username } from '../state/actions';

import Header from '../components/Header/header';
import RecipeAdder from '../components/RecipeAdder/recipeAdder';
import NavBar from '../components/NavBar/navbar';


const ProfilePage = () => {

  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const dispatch = useDispatch();

  useEffect( () => {
    const accessToken = localStorage.getItem('accessToken');

    const getUserData = async (accessToken ) => {
      const userData = await (await fetchProfileData(accessToken)).json();
      dispatch(set_username(userData.username));
    }

    if (isAuthenticated) {
      getUserData(accessToken);
    }

  }, [isAuthenticated, dispatch])


  return (
  <>
    {
      isAuthenticated && <>
          <Header/>
          <NavBar/>
          <RecipeAdder/>
        </>
    }
    {
      !isAuthenticated && <div>you need to login first!!!</div>
    }

  </> );
}

export default ProfilePage;