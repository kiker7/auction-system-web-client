import axios from 'axios';
const baseUrl = process.env.API_URL + "/token";

export function singInUser(user) {
  const {username, password} = user;
  return axios.post(baseUrl, {username, password})
    .then(response => {
      localStorage.setItem('user', JSON.stringify(response.data));
    })
    .catch(error => {
      console.error("API call failed. " + error); // eslint-disable-line no-console
      throw error;
    });
}
