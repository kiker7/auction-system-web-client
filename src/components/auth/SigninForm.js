import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

const SigninForm = ({onSave, onChange, errors, sending=false}) => {

  return (
    <form onSubmit={onSave}>
      <h2>Sign in</h2>
      { errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}

      <TextInput
        name="username"
        label="Username"
        onChange={onChange}
        error={errors.username}
      />

      <TextInput
        name="password"
        label="Password"
        onChange={onChange}
        error={errors.password}
      />

      <button type="submit" disabled={sending} className="btn btn-primary">
        {sending ? "Sending.." : "Login"}
      </button>
    </form>
  );
};

SigninForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  sending: PropTypes.bool
};

export default SigninForm;
