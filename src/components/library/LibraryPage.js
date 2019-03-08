import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import GameForm from '../games/GameForm';
import GameList from '../games/GameList';
import { produce } from "immer";
// import { loadUserLibrary } from "../../api/libraryApi";
// import { toastError } from "../../utils/errors";

class LibraryPage extends React.Component{

  state = {
    game: {name: "", price: 0},
    sending: false,
    errors: {}
  };

  componentDidMount() {
    // const { dispatch } = this.props;
    //
    //
    // dispatch(loadUserLibrary())
    //   .catch(error => {
    //     toastError("Failed to load user library.", error);
    //   });
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState(produce((draft) => {
      draft.game[name] = value;
    }));
  };

  handleSave = event => {
    event.preventDefault();

  };

  render() {
    const { library } = this.props;

    return (
      <div className="container">
        <div className="mt-4 mb-4">
          <GameForm onSave={this.handleSave} onChange={this.handleChange} sending={this.state.sending} errors={this.state.errors}/>
        </div>
        { library.length > 0 ? (<GameList games={library}/>) : (<div className="card bg-info text-white"><div className="card-body">Empty library</div></div>) }
      </div>
    );
  }
}

LibraryPage.propTypes = {
  dispatch : PropTypes.func.isRequired,
  library : PropTypes.array
};

function mapStateToProps(state) {
  return {
    library: state.userStore.library,
  };
}

export default connect(mapStateToProps)(LibraryPage);
