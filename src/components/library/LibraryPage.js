import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import GameForm from '../games/GameForm';
import GameList from '../games/GameList';
import { produce } from "immer";
import * as actions from "../../actions/gameActions";
import { toastError } from "../../utils/errors";
import * as userUtils from '../../utils/userUtils';
import {bindActionCreators} from "redux";
import { toast } from "react-toastify";

class LibraryPage extends React.Component{

  state = {
    game: {name: "", price: 0},
    sending: false,
    errors: {}
  };

  componentDidMount() {
    this.props.actions.loadLibrary(userUtils.getCurrentUserName())
      .catch(error => {
        toastError("Failed to load user library.", error);
      });
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState(produce((draft) => {
      draft.game[name] = value;
    }));
  };

  handleSave = event => {
    event.preventDefault();
    this.setState({sending: true});

    this.props.actions
      .saveGame(this.state.game)
      .then(() => {
        this.setState({sending: false, errors: {}});
        toast.success("Game saved");
      })
      .catch(error => {
        this.setState({
          sending: false,
          errors: {onSave: error.message}
        });
      });
  };

  postGameAuction = (gameId) => {
    console.log("Post auction for game: " + gameId); // eslint-disable-line no-console
  };

  isCurrentUserGameOwner = (gameId) => {
    return this.props.library.games.some(game => game.id === gameId);
  };

  render() {
    const { library } = this.props;

    return (
      <div className="container">
        <div className="mt-4 mb-4">
          <GameForm onSave={this.handleSave} onChange={this.handleChange} sending={this.state.sending} errors={this.state.errors}/>
        </div>
        { (library.games && library.games.length > 0 ) ? (<GameList games={library.games} postAuction={this.postGameAuction} checkGameOwner={this.isCurrentUserGameOwner} />) :
          (<div className="card bg-info text-white"><div className="card-body">Empty library</div></div>) }
      </div>
    );
  }
}

LibraryPage.propTypes = {
  library : PropTypes.object,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    library: state.userStore.library,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LibraryPage);
