import * as types from '../constants/actionTypes';
import {beginApiCall, apiCallError} from "./apiStatusActions";
import * as auctionApi from '../api/auctionApi';

export function loadAuctionsSuccess(auctions) {
  return {type: types.LOAD_AUCTIONS_SUCCESS, auctions};
}

export function loadAuctionsFailure() {
  return {type: types.LOAD_AUCTIONS_FAILURE};
}

export function loadAuctionSuccess(auction) {
  return {type: types.LOAD_AUCTION_SUCCESS, auction};
}

export function loadAuctionFailure() {
  return {type: types.LOAD_AUCTION_FAILURE};
}

export function postBidSuccess(auction) {
  return {type: types.POST_BID_SUCCESS, auction};
}

export function postBidFailure() {
  return {type: types.POST_BID_FAILURE};
}

export function followAuctionSuccess(auction) {
  return {type: types.FOLLOW_AUCTION_SUCCESS, auction};
}

export function followAuctionFailure() {
  return {type: types.FOLLOW_AUCTION_FAILURE};
}

export function unfollowAuctionSuccess(auction) {
  return {type: types.UNFOLLOW_AUCTION_SUCCESS, auction};
}

export function unfollowAuctionFailure() {
  return {type: types.UNFOLLOW_AUCTION_FAILURE};
}

export function loadAuctions() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return auctionApi.loadAuctions()
      .then(auctions => dispatch(loadAuctionsSuccess(auctions)))
      .catch(error => {
        dispatch(apiCallError());
        dispatch(loadAuctionsFailure());
        throw error;
      })
  }
}

export function loadAuction(id) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return auctionApi.loadAuction(id)
      .then(auction => dispatch(loadAuctionSuccess(auction)))
      .catch(error => {
        dispatch(apiCallError());
        dispatch(loadAuctionFailure());
        throw error;
      });
  }
}

export function postAuctionBid(id, offer) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return auctionApi.postAuctionBid(id, offer)
      .then(auction => dispatch(postBidSuccess(auction)))
      .catch(error => {
        dispatch(apiCallError());
        dispatch(postBidFailure());
        throw error;
      })
  }
}

export function followAuction(id) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return auctionApi.followAuction(id)
      .then(auction => dispatch(followAuctionSuccess(auction)))
      .catch(error => {
        dispatch(apiCallError());
        dispatch(followAuctionFailure());
        throw error;
      })
  }
}

export function unfollowAuction(id) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return auctionApi.unfollowAuction(id)
      .then(auction => dispatch(unfollowAuctionSuccess(auction)))
      .catch(error => {
        dispatch(apiCallError());
        dispatch(unfollowAuctionFailure());
        throw error;
      })
  }
}
