import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const AuctionCard = ({auction, convert}) => (
  <div className="card bg-light text-dark auction-card mb-2">
    <div className="card-body">
      <div className="d-flex">
        <div className="mr-auto"><h4>{auction.game.name}</h4></div>
        <div className="auction-card-closing-time">Closing time: {convert(auction.closingTime)}</div>
      </div>
      <div className="text-center p-1">
        <Link to={"/auction/" + auction.id}>
          <button className="btn btn-secondary text-white w-100">Go to auction</button>
        </Link>
      </div>
    </div>
  </div>
);

AuctionCard.propTypes = {
  auction: PropTypes.object.isRequired,
  convert: PropTypes.func
};

export default AuctionCard;
