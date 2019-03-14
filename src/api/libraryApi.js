import axios from 'axios';
import * as utils from './requestUtils';

/* eslint-disable no-console */

export function loadUserLibrary(userName) {
  return axios.get(utils.BASE_URL + "/api/user/" + userName + "/library", utils.getHeaderObject())
    .then(response => response.data)
    .catch(error => {
      console.error("API call failed. " + error);
      throw error;
    });
}

export function saveUserGame(game) {
  return axios.post(utils.BASE_URL + "/api/game", game, utils.getHeaderObject())
    .then(response => response.data)
    .catch(error => {
      console.error("API call failed. " + error);
      throw error;
    });
}

export function getAllGames() {
  return axios.get(utils.BASE_URL + "/api/games", utils.getHeaderObject())
    .then(response => (response.data))
    .catch(error => {
      console.error("API call failed. " + error);
      throw error;
    });
}

export function postGameAuction(gameId){
  return axios.post(utils.BASE_URL + "/api/game/" + gameId + "/add-auction", {}, utils.getHeaderObject())
    .then(response => response.data)
    .catch(error => {
      console.error("API call failed. " + error.response.data);
      throw error;
    });
}
