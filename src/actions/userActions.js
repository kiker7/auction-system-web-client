import * as types from '../constants/actionTypes';
import {beginApiCall, apiCallError} from "./apiStatusActions";
import * as userApi from '../api/userApi';


export function singInSuccess(user) {
  return {type: types.SIGNIN_USER, user};
}

export function singIn(user) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return userApi
      .singInUser(user)
      .then(response => {
        dispatch(singInSuccess(response));
      })
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  }
}