import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function users(state = initialState.user, action) {
  switch (action.type) {
    case types.SIGNIN_USER:
      return action.user;
    default:
        return state;
  }
}
