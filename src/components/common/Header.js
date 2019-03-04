import React from 'react';
import {NavLink, Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import * as actions from '../../actions/userActions';
import {bindActionCreators} from "redux";

class Header extends React.Component {

  signOut = () =>{
    this.props.actions.signOut(this.props.user);
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink to="/" className="nav-link navbar-brand" exact>
          Home
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {this.props.authenticated && (
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/auctions" className="nav-link" exact>
                  Auctions
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/library" className="nav-link">
                  Library
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/games" className="nav-link" exact>
                  Games
                </NavLink>
              </li>
            </ul>
          )}
          {this.props.authenticated && (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/signin" onClick={this.signOut} className="nav-link">
                  Logout
                </Link>
              </li>
            </ul>
          )}
          {!this.props.authenticated && (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/signup" className="nav-link" exact>
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/signin" className="nav-link" exact>
                  Login
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  authenticated: PropTypes.bool,
  user: PropTypes.object,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    user : state.userStore.currentUser,
    authenticated: state.userStore.currentUser.authenticated
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
