import React, {Component} from 'react';
import PropTypes from 'prop-types';
import App from './App';
import {Provider} from 'react-redux';
import {ConnectedRouter} from "connected-react-router";

export default class Root extends Component{
  render() {
    const {store, history} = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App/>
        </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store : PropTypes.object.isRequired,
  history : PropTypes.object.isRequired
};
