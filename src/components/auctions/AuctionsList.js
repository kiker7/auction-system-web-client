import React from 'react';
import PropTypes from 'prop-types';
import AuctionCard from './AuctionCard';

const AuctionList = ({auctions, convert}) => (
  <div>
    {auctions.map(auction => {
      return (<AuctionCard key={auction.id} auction={auction} convert={convert}/>);
    })}
  </div>
);

AuctionList.propTypes = {
  auctions: PropTypes.array.isRequired,
  convert: PropTypes.func
};

export default AuctionList;
