import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

const BidForm = ({onSave, onChange, errors, sending = false}) => {

  return (
    <form onSubmit={onSave} className="form-inline">
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="offer"
        label=""
        placeholder="Offer"
        onChange={onChange}
      />
      <div className="text-center">
        <button type="submit" disabled={sending} className="btn btn-primary ml-2">
          {sending ? "Sending.." : "Bid"}
        </button>
      </div>
    </form>
  );
};

BidForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  sending: PropTypes.bool
};

export default BidForm;
