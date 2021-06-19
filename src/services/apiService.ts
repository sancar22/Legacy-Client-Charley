import {
  ILogin, INote, IRecipe, ISignup,
} from 'src/interfaces';

// const BASE_URL = "https://chef-share-server.herokuapp.com";
const BASE_URL = 'http://localhost:5000';

const authPost = (route: string, body: any) => {
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

const authPostNoBody = (route: string) => {
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

const noAuthPost = (route: string, body: any) => fetch(BASE_URL + route, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});

const authGet = (route: string) => {
  const token = localStorage.getItem('accessToken');
  if (route === '/logout') localStorage.removeItem('accessToken');
  return fetch(BASE_URL + route, {
    headers: {
      Authorization: `Bearer: ${token}`,
    },
  });
};

// auth
const attemptLogin = (login: ILogin): Promise<Response> => noAuthPost('/login', login);

const attemptSignup = (signup: ISignup): Promise<Response> => noAuthPost('/signup', signup);

const logout = (): Promise<Response> => authGet('/logout');

const fetchProfileData = (): Promise<Response> => authGet('/profile');

// scraping
const scrapeRecipe = (url: string): Promise<Response> => {
  const body = { url };
  return authPost('/scrape', body);
};

// friends
const getFriends = (): Promise<Response> => authGet('/users');

const getFriendStore = (username: string): Promise<Response> => {
  const body = { username };
  return authPost('/getFriendStore', body);
};

const addFromFriend = (recipe: IRecipe): Promise<Response> => {
  const body = { recipe };
  return authPost('/addFromFriend', body);
};

// edits
const deleteRecipe = (id: string): Promise<Response> => authPostNoBody(`/deleteRecipe/${id}`);

const editRecipe = (id: string, payload: any, editAction: string) => {
  const body = { id, payload };
  return authPost(`/editRecipe/${editAction}`, body);
};

const nameChange = (id: string, name: string): Promise<Response> => editRecipe(id, name, 'nameChange');

const addNote = (id: string, note: INote): Promise<Response> => editRecipe(id, note, 'addNote');

const deleteNote = (id: string, noteId: string): Promise<Response> => editRecipe(id, noteId, 'deleteNote');
const apiService = {
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

export default apiService;
