import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from './home/HomePage';
import PageNotFound from './PageNotFound';
import {hot} from 'react-hot-loader';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route render={PageNotFound}/>
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
