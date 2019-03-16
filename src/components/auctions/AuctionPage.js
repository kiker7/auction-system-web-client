import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import * as actions from "../../actions/auctionActions";
import {bindActionCreators} from "redux";
import {toastError} from "../../utils/errors";


class AuctionPage extends React.Component {

  componentDidMount() {
    if (this.props.auctions.length === 0) {
      this.props.actions.loadAuctions()
        .catch(error => {
          toastError("Failed to load auctions.", error)
        });
    }
  }

  followAuction = () => {
    console.log("follow auction"); // eslint-disable-line no-console
  };

  render() {

    const auction = this.props.auctions.find(auction => {
      return auction.id === this.props.match.params.id;
    });

    return (
      <div className="container">
        {auction !== undefined &&
        (<div className="text-center auction-header">
          <div className="d-flex">
            <div className="mr-auto"><h4>{auction.game.name}</h4><p>Price: {auction.game.price} $</p></div>
            <div className="auction-card-closing-time"><a className="btn btn-success text-white"
                                                          onClick={this.followAuction}>Follow</a></div>
          </div>
          <div>
            post bid
          </div>
          <div>
            bids
          </div>
        </div>)}
      </div>
    );
  }
}

AuctionPage.propTypes = {
  match: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  auctions: PropTypes.array.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(AuctionPage);
