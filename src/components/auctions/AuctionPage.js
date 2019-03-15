import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';


class AuctionPage extends React.Component{

  componentDidMount() {
    console.log(this.props.match.params.id); // eslint-disable-line no-console
  }

  render() {
    return (
      <div>Auction Page</div>
    );
  }
}

AuctionPage.propTypes = {
  username: PropTypes.string,
  match: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    username: state.userStore.currentUser.username,
  };
}

export default connect(mapStateToProps)(AuctionPage);
