import * as types from '../constants/actionTypes';
import { beginApiCall, apiCallError } from "./apiStatusActions";
import * as libraryApi from "../api/libraryApi";

export function loadLibrarySuccess(library) {
  return {type: types.LIBRARY_LOAD_SUCCESS, library};
}

export function saveUserGameSuccess(game) {
  return {type: types.POST_GAME_SUCCESS, game};
}

export function saveUserGameFailure(game) {
  return {type: types.POST_GAME_FAILURE, game};
}

export function loadGamesSuccess(games) {
  return {type: types.LOAD_GAMES_SUCCESS, games};
}

export function postGameAuctionSuccess(gameId, auctionId) {
  return {type: types.POST_GAME_AUCTION_SUCCESS, gameId, auctionId};
}

export function postGameAuctionFailure() {
  return {type: types.POST_GAME_AUCTION_FALIRE};
}

export function loadLibrary(userName) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return libraryApi.loadUserLibrary(userName)
      .then(library => dispatch(loadLibrarySuccess(library)))
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  }
}

export function saveGame(game) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return libraryApi.saveUserGame(game)
      .then((lib) => dispatch(saveUserGameSuccess(lib.games.pop())))
      .catch(error => {
        dispatch(saveUserGameFailure(game));
        dispatch(apiCallError());
        throw error;
      });
  }
}

export function loadGames() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return libraryApi.getAllGames()
      .then(games => dispatch(loadGamesSuccess(games)))
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  }
}

export function postAuction(gameId) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return libraryApi.postGameAuction(gameId)
      .then((auction) => dispatch(postGameAuctionSuccess(gameId, auction.id)))
      .catch(error => {
        dispatch(apiCallError());
        dispatch(postGameAuctionFailure());
        throw error;
      });
  }
}
