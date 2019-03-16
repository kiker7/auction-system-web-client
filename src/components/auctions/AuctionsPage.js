import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import AuctionsList from './AuctionsList';
import * as actions from '../../actions/auctionActions';
import {bindActionCreators} from "redux";
import {toastError} from "../../utils/errors";

class AuctionsPage extends React.Component {

  componentDidMount() {
    this.props.actions.loadAuctions()
      .catch(error => toastError("Failed to load auctions.", error));
  }

  convertTimestamp = (ts) => {
    let date = new Date(ts);
    return date.toLocaleDateString("pl-PL");
  };

  render() {
    const {auctions} = this.props;

    return (
      <div className="container">
        <div className="row justify-content-center mt-4">
          {auctions.length > 0 ? (<AuctionsList auctions={auctions} convert={this.convertTimestamp}/>) : (
            <div className="card bg-info text-white">
              <div className="card-body">No auctions available</div>
            </div>)}
        </div>
      </div>
    );
  }
}

AuctionsPage.propTypes = {
  auctions: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    auctions: state.auctionStore.auctions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuctionsPage);
