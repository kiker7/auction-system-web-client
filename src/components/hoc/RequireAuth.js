import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {push} from 'connected-react-router';
import {connect} from 'react-redux';
import {toast} from "react-toastify";

export default function (ComposedComponent) {
  class Authentication extends Component {

    state = {};

    static getDerivedStateFromProps(props) {
      if (!props.authenticated) {
        toast.info("You must be logged in.");
        props.push('/signin');
        return null;
      }
      return null;
    }

    shouldComponentUpdate(nextProps) {
      if (!nextProps.authenticated) {
        toast.info("You must be logged in.");
        nextProps.push('/signin');
        return false;
      }
      return false;
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  Authentication.propTypes = {
    authenticated: PropTypes.bool
  };

  function mapStateToProps(state) {
    return {authenticated: state.user.authenticated}
  }

  return connect(mapStateToProps, {push})(Authentication);
}

