import { combineReducers } from 'redux';
import user from './userReducer';
import apiCallsInProgress from './apiStatusReducer';

const rootReducer = combineReducers({
  userStore: user,
  apiCallsInProgress
});

export default rootReducer;
