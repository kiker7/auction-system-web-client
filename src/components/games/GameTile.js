import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GameTile = ({game, postAuction, checkGameOwner}) => (
  <div className="card user-card">
    <img className="card-img-top" style={{width: '100%'}} src="../../images/game.jpg"/>
    <div className="card-body">
      <h4 className="card-title">{game.name}</h4>
      <p>Price {game.price}</p>
      {(game.hasOwnProperty('auction') && game.auction) ? (
          <div className="text-center"> <Link to={"/auction/" + game.auction.id} ><button className="btn btn-info auction-link text-white">Go to auction</button> </Link></div>)
        : (checkGameOwner && (
          <div className="text-center"><a className="btn btn-success auction-link text-white" role="button"
                                          aria-pressed="true" onClick={() => postAuction(game.id)}>Post
            auction</a></div>))}
    </div>
  </div>
);

GameTile.propTypes = {
  game: PropTypes.object.isRequired,
  postAuction: PropTypes.func,
  checkGameOwner: PropTypes.func
};

export default GameTile;
