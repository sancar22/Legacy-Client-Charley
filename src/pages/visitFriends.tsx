import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { IRecipe, IState } from 'src/interfaces';
import Header from '../components/Headings/Header/header';
import NavBar from '../components/Headings/NavBar/navbar';
import RecipeList from '../components/RecipeList/recipeList';
import apiService from '../services/apiService';

type User = {
  value: string;
  label: string;
};
const VisitFriendsPage = () => {
  const isAuthenticated = useSelector<IState>((state) => state.isAuthenticated);
  const [friendStore, setFriendStore] = useState<IRecipe[]>([]);
  const [options, setOptions] = useState<User[]>([]);

  useEffect(() => {
    const getUserList = () => {
      apiService
        .getFriends()
        .then((res) => res.json())
        .then((res) => {
          const userList: User[] = res.map((username: string) => ({
            value: username,
            label: username,
          }));
          setOptions(userList);
        });
    };
    if (isAuthenticated) {
      try {
        getUserList();
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  const handleSelect = async (selected) => {
    try {
      const store = await apiService
        .getFriendStore(selected.value)
        .then((res) => res.json());
      setFriendStore(store);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {isAuthenticated && (
        <>
          <Header />
          <NavBar />
          <div
            style={{
              width: '80%',
              marginLeft: '10%',
              marginRight: '10%',
              marginTop: '20px',
            }}
          >
            <Select options={options} onChange={handleSelect} />
          </div>
          {friendStore.length && (
            <RecipeList recipeStore={friendStore} viewAsSelf={false} />
          )}
        </>
      )}
    </>
  );
};

export default VisitFriendsPage;
