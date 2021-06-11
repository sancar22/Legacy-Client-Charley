
const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const CHECK_USER_AUTH = 'CHECK_USER_AUTH';
const SET_USERNAME = 'SET_USERNAME';
const REWRITE_STORE = 'REWRITE_STORE';


export const authenticate_user = () => ({
  type: AUTHENTICATE_USER
});

export const logout_user = () => ({
  type: LOGOUT_USER
})

export const check_user_auth = () => ({
  type: CHECK_USER_AUTH
});

export const set_username = (username) => ({
  type: SET_USERNAME,
  payload: username
})

export const rewrite_store = (store) => ({
  type: REWRITE_STORE,
  payload: store
})


