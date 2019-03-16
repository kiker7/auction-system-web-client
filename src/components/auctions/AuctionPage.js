import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import * as actions from "../../actions/auctionActions";
import {bindActionCreators} from "redux";
import {toastError} from "../../utils/errors";
import BidForm from './BidForm';
import BidList from './BidList';
import {produce} from "immer";

class AuctionPage extends React.Component {

  state = {
    bid: {},
    sending: false,
    errors: {}
  };

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

  handlePost = event => {
    event.preventDefault();

    console.log("post bid"); // eslint-disable-line no-console

  };

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState(
      produce((draft) => {
        draft.bid[name] = value
      })
    );
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
            <BidForm
              onSave={this.handlePost}
              onChange={this.handleChange}
              sending={this.state.sending}
              errors={this.state.errors}
            />
          </div>
          <div>
            <BidList/>
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
