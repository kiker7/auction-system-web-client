import React from 'react';
import {connect} from "react-redux";

class NotificationList extends React.Component{

  render() {

    return (
      <div>
        Notifications
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userStore.currentUser
  };
}

export default connect(mapStateToProps)(NotificationList);

