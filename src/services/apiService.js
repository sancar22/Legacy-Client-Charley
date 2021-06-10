
const BASE_URL = "https://chef-share-server.herokuapp.com";


const attemptLogin = (login) => {

  return fetch(BASE_URL+'/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(login)
  });
};

const attemptSignup = () => {

}


module.exports = {
  attemptLogin, attemptSignup,
}