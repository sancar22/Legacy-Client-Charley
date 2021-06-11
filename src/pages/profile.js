import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logout from '../components/Logout/logout';
import { fetchProfileData } from '../services/apiService';
import { set_username } from '../state/actions';


const ProfilePage = () => {

  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const username = useSelector(state => state.username);
  const dispatch = useDispatch();

  useEffect( () => {
    const accessToken = localStorage.getItem('accessToken');

    console.log(isAuthenticated);
    console.log(accessToken);

    const getUserData = async (accessToken ) => {
      const userData = await (await fetchProfileData(accessToken)).json();
      console.log(userData);
      dispatch(set_username(userData.username));
    }

    if (isAuthenticated) {
      getUserData(accessToken);
    }

  }, [isAuthenticated, dispatch])


  return (
  <div>
     {username}
      <Logout/>
  </div> );
}

export default ProfilePage;