import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header/header';
import NavBar from '../components/NavBar/navbar';
import { rewrite_store } from '../state/actions';
import { fetchProfileData } from '../services/apiService';
import Recipe from '../components/Recipe/recipe';


const RecipePage = () => {
  const recipeStore = useSelector(state => state.recipeStore);
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const dispatch = useDispatch();

  useEffect( () => {
    const accessToken = localStorage.getItem('accessToken');

    const getUserData = async (accessToken ) => {
      const userData = await (await fetchProfileData(accessToken)).json();
      dispatch(rewrite_store(userData.recipeStore));
    }

    if (isAuthenticated) {
      getUserData(accessToken);
      console.log(recipeStore);
    }

  }, [isAuthenticated, dispatch])


  return ( <>
   {
     isAuthenticated && <>
        <Header/>
        <NavBar/>
        {
          recipeStore.map(recipe => <Recipe recipe={recipe}/>)
        }
      </>
   }
  </> );
}

export default RecipePage;