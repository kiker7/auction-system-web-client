import axios from 'axios';
const baseUrl = process.env.API_URL;

export function singInUser(user) {
  const {username, password} = user;
  return axios.post(baseUrl + "/auth/token", {username, password})
    .then(response => {
      localStorage.setItem('user', JSON.stringify(response.data));
    })
    .catch(error => {
      console.log("API call failed. " + error); // eslint-disable-line no-console
      throw error;
    });
}

export function getUsers() {
  return axios.get(baseUrl + "/api/user", {headers: {"Authorization" : `Bearer ${JSON.parse(localStorage.getItem('user')).token}`}})
    .then(response => response.data)
    .catch(error => {
      console.error("API call failed. " + error); // eslint-disable-line no-console
      throw error;
    });
}
