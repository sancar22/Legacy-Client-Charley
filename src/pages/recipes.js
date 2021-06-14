import React, {useEffect }from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Headings/Header/header';
import NavBar from '../components/Headings/NavBar/navbar';
import RecipeList from '../components/RecipeList/recipeList';
import { rewrite_store } from '../state/actions';
import { fetchProfileData } from '../services/apiService';


const RecipePage = () => {
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const recipeStore = useSelector(state => state.recipeStore);
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const getUserData = async (accessToken ) => {
      const userData = await fetchProfileData(accessToken).then(res => res.json())
      dispatch(rewrite_store(userData.recipeStore));
    }

    if (isAuthenticated) {
      getUserData(accessToken);
    }
  }, [isAuthenticated, dispatch])


  return ( <>
   {
     isAuthenticated && <>
        <Header/>
        <NavBar/>
        {recipeStore.length? <RecipeList recipeStore={recipeStore} viewAsSelf={true}/> : null}
      </>
   }
  </> );
}

export default RecipePage;