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

export function loadLibrary(userId) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return libraryApi.loadUserLibrary(userId)
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
      .then(game => dispatch(saveUserGameSuccess(game)))
      .catch(error => {
        dispatch(saveUserGameFailure(game));
        dispatch(apiCallError());
        throw error;
      });
  }
}
