import { combineReducers } from 'redux';
import user from './userReducer';

const rootReducer = combineReducers({
  userStore: user
});

export default rootReducer;
