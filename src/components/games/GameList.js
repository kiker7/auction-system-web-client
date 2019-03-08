import React from 'react';
import PropTypes from 'prop-types';
import GameTile from './GameTile';

const GameList = ({games}) => (
  <div className="row user-list">
    {games.map(game => {
      return (
        <GameTile key={game.id} game={game}/>
      );
    })}
  </div>
);

GameList.propTypes = {
  games: PropTypes.array.isRequired
};

export default GameList;
