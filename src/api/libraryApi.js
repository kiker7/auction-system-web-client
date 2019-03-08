import axios from 'axios';
import * as utils from './requestUtils';

export function loadUserLibrary(id) {
  axios.get(utils.BASE_URL + "/api/user/" + id + "/library", utils.HEADER)
    .then(response => response.data)
    .catch(error => {
      console.error("API call failed. " + error); // eslint-disable-line no-console
      throw error;
    });
}

export function saveUserGame(game) {
  axios.post(utils.BASE_URL + "/api/game", game, utils.HEADER)
    .then(response => response.data)
    .catch(error => {
      console.error("API call failed. " + error); // eslint-disable-line no-console
      throw error;
    });
}
