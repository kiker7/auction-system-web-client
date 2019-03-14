import axios from 'axios';
import * as utils from './requestUtils';

export function singInUser(user) {
  const {username, password} = user;
  return axios.post(utils.BASE_URL + "/auth/token", {username, password})
    .then(response => response.data)
    .catch(error => {
      console.log("API call failed. " + error); // eslint-disable-line no-console
      throw error;
    });
}

export function getUsers() {
  return axios.get(utils.BASE_URL + "/api/user", utils.getHeaderObject())
    .then(response => response.data)
    .catch(error => {
      console.error("API call failed. " + error); // eslint-disable-line no-console
      throw error;
    });
}
