import React from 'react';
import PropTypes from 'prop-types';
import AuctionCard from './AuctionCard';

const AuctionList = ({auctions}) => (
  <div>
    {auctions.map(auction => {
      return (<AuctionCard key={auction.id} auction={auction}/>);
    })}
  </div>
);

AuctionList.propTypes = {
  auctions: PropTypes.array.isRequired
};

export default AuctionList;
