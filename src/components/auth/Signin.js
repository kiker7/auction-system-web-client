import React from 'react';
import {produce} from "immer";
import PropTypes from 'prop-types';
import SigninForm from './SigninForm';
import {bindActionCreators} from "redux";
import * as actions from "../../actions/userActions";
import {connect} from "react-redux";
import { toast } from 'react-toastify';

class Signin extends React.Component{

  state = {
    user: {},
    sending: false,
    errors: {}
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState(
      produce(draft => {
        draft.user[name] = value;
      })
    );
  };

  handleSave = event => {
    event.preventDefault();
    this.setState({sending: true});

    this.props.actions
      .signIn(this.state.user)
      .then(() => {
        console.log('Log in'); // eslint-disable-line no-console
        this.setState({
          sending: false,
          errors: {}
        });
        toast.success("Successful login");
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({
          sending: false,
          errors: {onSave: error.message}
        });
      });
  };

  render() {
    return (
      <div className="container mt-4" id="sign-in-form">
        <SigninForm
          onSave={this.handleSave}
          onChange={this.handleChange}
          sending={this.state.sending}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

Signin.propTypes = {
  actions: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.userStore.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
