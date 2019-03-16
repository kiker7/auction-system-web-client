import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import * as actions from "../../actions/auctionActions";
import {bindActionCreators} from "redux";
import {toastError} from "../../utils/errors";
import BidForm from './BidForm';
import BidList from './BidList';
import {produce} from "immer";
import {toast} from "react-toastify";

class AuctionPage extends React.Component {

  state = {
    bid: {},
    sending: false,
    errors: {},
    auction: {}
  };

  componentDidMount() {
    if (this.props.auctions.length === 0) {
      this.props.actions.loadAuctions()
        .then(() => {
          this.setState({auction: this.props.auctions.find((auction) => auction.id === this.props.match.params.id)});
        })
        .catch(error => {
          toastError("Failed to load auctions.", error)
        });
    }else{
      this.setState({auction: this.props.auctions.find((auction) => auction.id === this.props.match.params.id)});
    }
  }

  followAuction = () => {
    console.log("follow auction"); // eslint-disable-line no-console
  };

  handlePost = event => {
    event.preventDefault();
    this.setState({sending: true});
    this.props.actions.postAuctionBid(this.props.match.params.id, this.state.bid)
      .then(() => {
        toast.success("Bid post success.");
        this.setState({sending: false});
      })
      .catch(error => {
        toastError("Failed to post bid offer. ", error)
      });
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
    const {auction} = this.state;

    return (
      <div className="container">
        {!(Object.entries(auction).length === 0 && auction.constructor === Object) &&
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
  auctions: PropTypes.array.isRequired,
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
