import React from 'react';
import PropTypes from 'prop-types';

const GameTile = ({game, postAuction, checkGameOwner}) => (
  <div className="card user-card">
    <img className="card-img-top" style={{width: '100%'}} src="../../images/game.jpg"/>
    <div className="card-body">
      <h4 className="card-title">{game.name}</h4>
      <p>Price {game.price}</p>
      {(game.hasOwnProperty('auction') && game.auction) ? (
          <div className="text-center"><a href="#" className="btn btn-info auction-link text-center" role="button" aria-pressed="true">Go to auction</a></div>)
        : (checkGameOwner && (
          <div className="text-center"><a className="btn btn-success auction-link text-white" role="button" aria-pressed="true" onClick={() => postAuction(game.id)}>Post
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
