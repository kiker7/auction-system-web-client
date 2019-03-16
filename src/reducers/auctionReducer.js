import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function auctions(state = initialState.auctionStore, action) {
  switch (action.type) {
    case types.LOAD_AUCTIONS_SUCCESS:
      return {...state, auctions: action.auctions};
    case types.LOAD_AUCTION_SUCCESS:
      return {...state};
    default:
      return state;
  }
}
