import React from 'react';
import { useSelector } from 'react-redux';


const ProfilePage = () => {
  const username = useSelector(state => state.username);
  
  return (
  <div>
     {username}
  </div> );
}

export default ProfilePage;