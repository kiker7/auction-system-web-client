import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {push} from 'connected-react-router';

export default function (ComposedComponent) {
  class NotAuthentication extends Component {

    state = {};

    static getDerivedStateFromProps(props){
      if(!props.authenticated){
        push('/signin');
        return null;
      }
      return null;
    }

    shouldComponentUpdate(nextProps) {
      if(!nextProps.authenticated){
        push('/signin');
      }
      return false;
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  NotAuthentication.propTypes = {
    authenticated: PropTypes.bool
  };

  function mapStateToProps(state) {
    return {authenticated: state.userStore.currentUser.authenticated}
  }

  return connect(mapStateToProps)(NotAuthentication);
}
