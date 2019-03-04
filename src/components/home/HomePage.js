import React from 'react';
import UserLst from './UserList';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {loadUsers} from "../../actions/userActions";
import {toastError} from "../../utils/errors";
import NotificationList from './NotificationList';

class HomePage extends React.Component {
  componentDidMount() {
    const {dispatch, currentUser} = this.props;

    if (currentUser.authenticated) {
      dispatch(loadUsers())
        .catch(error => {
          toastError("Users failed to load. " + error);
        });
    }
  }

  render() {
    const {users} = this.props;

    return (
      <div className="container">
        <NotificationList />
      {users.length > 0 ? (<UserLst users={users}/>) : (<div>No elements</div>)}
      </div>
    );
  }
}

HomePage.propTypes = {
  users: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  currentUser: PropTypes.object
};

function mapStateToProps(state) {
  return {
    currentUser: state.userStore.currentUser,
    users: state.userStore.users
  }
}

export default connect(mapStateToProps)(HomePage);
