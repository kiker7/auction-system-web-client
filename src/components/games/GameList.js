import React from 'react';
import PropTypes from 'prop-types';
import GameTile from './GameTile';

const GameList = ({games, postAuction, checkGameOwner}) => (
  <div className="row user-list">
    {games.map(game => {
      return (
        <GameTile key={game.id} game={game} postAuction={postAuction} checkGameOwner={checkGameOwner}/>
      );
    })}
  </div>
);

GameList.propTypes = {
  games: PropTypes.array.isRequired,
  postAuction : PropTypes.func,
  checkGameOwner : PropTypes.func
};

export default GameList;
