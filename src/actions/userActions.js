import * as types from '../constants/actionTypes';
import {beginApiCall, apiCallError} from "./apiStatusActions";
import * as userApi from '../api/userApi';


export function singInSuccess(user) {
  return {type: types.SIGNIN_USER_SUCCESS, user};
}

export function signInFailure() {
  return {type: types.SIGNIN_USER_FAILURE};
}

export function signOutSsuccess(user) {
  return {type: types.SINGOUT_USER, user};
}

export function loadUsersSuccess(users) {
  return {type: types.USERS_LOAD_SUCCESS, users};
}

export function signIn(user) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return userApi
      .singInUser(user)
      .then(user => {
        dispatch(singInSuccess(user));
      })
      .catch(error => {
        dispatch(apiCallError());
        dispatch(signInFailure());
        throw error;
      });
  }
}

export function signOut(user) {
  return function (dispatch) {
    localStorage.removeItem('user');
    return dispatch(signOutSsuccess(user));
  }
}

export function loadUsers() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return userApi.getUsers()
      .then(users => {
        dispatch(loadUsersSuccess(users))
      })
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  }
}
