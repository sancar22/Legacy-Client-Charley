// const BASE_URL = "https://chef-share-server.herokuapp.com";
const BASE_URL = 'http://localhost:5000';

const authPost = (route, body) => {
  const token = localStorage.getItem('accessToken');
  return fetch(BASE_URL + route, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer: ${token}`,
    },
    body: JSON.stringify(body),
  });
};

const authPostNoBody = (route) => {
  const token = localStorage.getItem('accessToken');
  console.log(BASE_URL + route);
  return fetch(BASE_URL + route, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer: ${token}`,
    },
  });
};

const noAuthPost = (route, body) => fetch(BASE_URL + route, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});

const authGet = (route) => {
  const token = localStorage.getItem('accessToken');
  if (route === '/logout') localStorage.removeItem('accessToken');
  return fetch(BASE_URL + route, {
    headers: {
      Authorization: `Bearer: ${token}`,
    },
  });
};

// auth
const attemptLogin = (login) => noAuthPost('/login', login);

const attemptSignup = (signup) => noAuthPost('/signup', signup);

const logout = () => authGet('/logout');

const fetchProfileData = () => authGet('/profile');

// scraping
const scrapeRecipe = (url) => {
  const body = { url };
  return authPost('/scrape', body);
};

// friends
const getFriends = () => authGet('/users');

const getFriendStore = (username) => {
  const body = { username };
  return authPost('/getFriendStore', body);
};

const addFromFriend = (recipe) => {
  console.log(recipe, 'recipe here');
  const body = { recipe };
  return authPost('/addFromFriend', body);
};

// edits
const deleteRecipe = (id) => authPostNoBody(`/deleteRecipe/${id}`);

const editRecipe = (id, payload, editAction) => {
  const body = { id, payload };
  return authPost(`/editRecipe/${editAction}`, body);
};

const nameChange = (id, name) => {
  editRecipe(id, name, 'nameChange');
};

const addNote = (id, note) => {
  editRecipe(id, note, 'addNote');
};

const deleteNote = (id, noteId) => {
  editRecipe(id, noteId, 'deleteNote');
};

module.exports = {
  attemptLogin,
  attemptSignup,
  logout,
  fetchProfileData,
  scrapeRecipe,
  deleteRecipe,
  nameChange,
  addNote,
  deleteNote,
  getFriends,
  getFriendStore,
  addFromFriend,
};
