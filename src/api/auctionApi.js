import axios from 'axios';
import * as utils from './requestUtils';

export function loadAuctions() {
  return axios.get(utils.BASE_URL + "/api/auctions", utils.getHeaderObject())
    .then(response => response.data)
    .catch(utils.handleError);
}

export function loadAuction(id) {
  return axios.get(utils.BASE_URL + "/api/auction/" + id, utils.getHeaderObject())
    .then(response => response.data)
    .catch(utils.handleError);
}

export function postAuctionBid(id, offer) {
  return axios.post(utils.BASE_URL + "/api/auction/" + id + "/set-bid", offer, utils.getHeaderObject())
    .then(response => response.data)
    .catch(utils.handleError);
}

export function followAuction(id) {
  return axios.post(utils.BASE_URL + "/api/auction/" + id + "/add-follower", {}, utils.getHeaderObject())
    .then(response => response.data)
    .catch(utils.handleError);
}

export function unfollowAuction(id) {
  return axios.post(utils.BASE_URL + "/api/auction/" + id + "/remove-follower", {}, utils.getHeaderObject())
    .then(response => response.data)
    .catch(utils.handleError)
}
