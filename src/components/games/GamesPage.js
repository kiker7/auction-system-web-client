import React from 'react';
import {connect} from "react-redux";
import GameList from './GameList';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import * as actions from '../../actions/gameActions';
import {toastError} from "../../utils/errors";

class GamesPage extends React.Component{

  componentDidMount() {
    this.props.actions.loadGames()
      .catch(error => {
        toastError("Failed to load games. ", error);
      });
  }

  render() {
    const {games} = this.props;
    return (
      <GameList games={games}/>
    );
  }
}

GamesPage.propTypes = {
  games: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    games: state.userStore.games
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesPage);
