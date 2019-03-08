import React from 'react';
import PropTypes from 'prop-types';

const GameTile = ({game}) => (
  <div className="card user-card">
    <img className="card-img-top" style={{width: '100%'}} src="../../images/game.jpg" />
    <div className="card-body">
      <h4 className="card-title">{game.name}</h4>
      <p>Price {game.price}</p>
    </div>
  </div>
);

GameTile.propTypes = {
  game : PropTypes.object.isRequired
};

export default GameTile;
