
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

const attemptSignup = (signup) => {
  return fetch(BASE_URL+'/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(signup)
  });
}

const fetchProfileData = (token) => {
  return fetch(BASE_URL+'/profile', {
    headers: {
      'Authorization': `Bearer: ${token}`
    }
  })
}

const logout = (itemName) => {
  // pass in 'accessToken'
  let token = localStorage.getItem(itemName);
  localStorage.removeItem(itemName)
  return fetch(BASE_URL + '/logout', {
    headers: {
      'Authorization': `Bearer: ${token}`
    }
  });
}

const scrapeRecipe = (url) => {
  let token = localStorage.getItem('accessToken');
  return fetch(BASE_URL+'/scrape', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer: ${token}`
    },
    body: JSON.stringify({url})
  }).then(res => res.json());
}


module.exports = {
  attemptLogin, attemptSignup, logout, fetchProfileData, scrapeRecipe
}