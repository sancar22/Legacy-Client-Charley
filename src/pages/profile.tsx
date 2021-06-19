import React, { useEffect } from 'react';
import { IState } from 'src/interfaces';
import { useSelector, useDispatch } from 'react-redux';
import apiService from '../services/apiService';
import { set_username } from '../state/actions';

import Header from '../components/Headings/Header/header';
import RecipeAdder from '../components/RecipeAdder/recipeAdder';
import NavBar from '../components/Headings/NavBar/navbar';

const ProfilePage = (): JSX.Element => {
  const isAuthenticated = useSelector<IState>((state) => state.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      const response = await apiService.fetchProfileData();
      const userData = await response.json();
      dispatch(set_username(userData.username));
    };

    if (isAuthenticated) {
      getUserData();
    }
  }, [isAuthenticated, dispatch]);

  return (
    <>
      {isAuthenticated && (
        <>
          <Header />
          <NavBar />
          <RecipeAdder />
        </>
      )}
      {!isAuthenticated && <div>you need to login first!!!</div>}
    </>
  );
};

export default ProfilePage;
