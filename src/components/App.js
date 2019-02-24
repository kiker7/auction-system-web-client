import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from './home/HomePage';
import PageNotFound from './PageNotFound';
import {hot} from 'react-hot-loader';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Signup from './auth/Signup';
import Signin from './auth/Signin';
import LibraryPage from './library/LibraryPage';
import AuctionsPage from './auctions/AuctionsPage';
import Header from './common/Header';
import GamePage from './games/GamesPage';

import requireAuth from './hoc/RequireAuth';
import requireNotAuth from './hoc/RequireNotAuth';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={requireAuth(HomePage)} />
          <Route path="/signin" component={requireNotAuth(Signin)}/>
          <Route path="/signup" component={requireNotAuth(Signup)}/>
          <Route path="/auctions" component={requireAuth(AuctionsPage)} />
          <Route path="/library" component={requireAuth(LibraryPage)} />
          <Route path="/games" component={requireAuth(GamePage)} />
          <Route render={PageNotFound}/>
        </Switch>
        <ToastContainer autoClose={1500} hideProgressBar />
      </div>
    );
  }
}

export default hot(module)(App);
