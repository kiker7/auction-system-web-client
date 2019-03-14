import React from 'react';
import PropTypes from 'prop-types';

const GameTile = ({game, postAuction, checkGameOwner}) => (
  <div className="card user-card">
    <img className="card-img-top" style={{width: '100%'}} src="../../images/game.jpg"/>
    <div className="card-body">
      <h4 className="card-title">{game.name}</h4>
      <p>Price {game.price}</p>
      {game.hasOwnProperty('auction') ? (<div><a href="#">Link to auction</a></div>)
        : (checkGameOwner && (<div><a onClick={postAuction}>Post auction - from owner</a></div>))}
    </div>
  </div>
);

GameTile.propTypes = {
  game: PropTypes.object.isRequired,
  postAuction: PropTypes.func,
  checkGameOwner: PropTypes.func
};

export default GameTile;
