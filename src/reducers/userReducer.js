import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function users(state = initialState.userStore, action) {
  switch (action.type) {
    case types.SIGNIN_USER:
      return {...state, currentUser: {authenticated: true}, error: {}};
    case types.SIGNIN_USER_FAILURE:
      return {...state, currentUser: {authenticated: false}, error: {}};
    case types.SINGOUT_USER:
      return {...state, currentUser: {authenticated: false}, error: {}};
    default:
        return state;
  }
}
