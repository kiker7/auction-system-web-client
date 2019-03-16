import { combineReducers } from 'redux';
import user from './userReducer';
import apiCallsInProgress from './apiStatusReducer';
import auctions from './auctionReducer';

const rootReducer = combineReducers({
  apiCallsInProgress,
  userStore: user,
  auctionStore: auctions
});

export default rootReducer;
