import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

const SigninForm = ({onSave, onChange, errors, sending = false}) => {

  return (
    <form onSubmit={onSave}>
      <div className="text-center">
        <h2>Auction system</h2>
      </div>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}

      <TextInput
        name="username"
        label=""
        placeholder="User name"
        onChange={onChange}
        error={errors.username}
      />

      <TextInput
        name="password"
        label=""
        placeholder="Password"
        onChange={onChange}
        error={errors.password}
      />
      <div className="text-center">
        <button type="submit" disabled={sending} className="btn btn-primary">
          {sending ? "Sending.." : "Login"}
        </button>
      </div>
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
