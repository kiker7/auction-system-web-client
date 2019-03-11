import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function users(state = initialState.userStore, action) {
  switch (action.type) {
    case types.SIGNIN_USER:
      return {...state, currentUser: {authenticated: true, username: action.user.username}, error: {}};
    case types.SIGNIN_USER_FAILURE:
      return {...state, currentUser: {authenticated: false}, error: {}};
    case types.SINGOUT_USER:
      return {currentUser: {authenticated: false}, error: {}};
    case types.USERS_LOAD_SUCCESS:
      return {...state, users: action.users};
    case types.LIBRARY_LOAD_SUCCESS:
      return {...state, library: action.library};
    case types.POST_GAME_SUCCESS:
      return {...state, library: {...state.library, games: [...state.library.games, action.game]}};
    default:
      return state;
  }
}
