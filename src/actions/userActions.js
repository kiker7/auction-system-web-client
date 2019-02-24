import * as types from '../constants/actionTypes';
import {beginApiCall, apiCallError} from "./apiStatusActions";
import * as userApi from '../api/userApi';


export function singInSuccess(user) {
  return {type: types.SIGNIN_USER, user};
}

export function signInFailure() {
  return {type: types.SIGNIN_USER_FAILURE};
}

export function signOutSsuccess(user) {
  return {type: types.SINGOUT_USER, user};
}

export function signIn(user) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return userApi
      .singInUser(user)
      .then(response => {
        dispatch(singInSuccess(response));
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
    return dispatch(signOutSsuccess(user));
  }
}
