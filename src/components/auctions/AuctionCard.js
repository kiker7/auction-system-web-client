import React from 'react';
import PropTypes from 'prop-types';

const AuctionCard = ({auction}) => (
  <div>
    {auction.id}
  </div>
);

AuctionCard.propTypes = {
  auction: PropTypes.object.isRequired
};

export default AuctionCard;
