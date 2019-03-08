import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

const GameForm = ({onSave, onChange, errors, sending = false}) => (
  <form onSubmit={onSave} className="form-inline">
    {errors.onSave && (
      <div className="alert alert-danger" role="alert">
        {errors.onSave}
      </div>
    )}
    <div className="form-group">
      <div className="mr-2">
        <TextInput
          label=""
          onChange={onChange}
          name="name"
          placeholder="Name"/>
      </div>
      <div className="mr-2">
        <TextInput
          label=""
          onChange={onChange}
          name="price"
          placeholder="Price"/>
      </div>
    </div>
    <button type="submit" disabled={sending} className="btn btn-primary">
      {sending ? "Sending.." : "Add game"}
    </button>
  </form>
);

GameForm.propTypes = {
  sending: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default GameForm;
