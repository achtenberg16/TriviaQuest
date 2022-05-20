import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, name, value, onChange, placeholder, testID, labelText }) {
  return (
    <label htmlFor={ testID }>
      {labelText}
      <input
        id={ testID }
        data-testid={ testID }
        type={ type }
        name={ name }
        value={ value }
        onChange={ onChange }
        placeholder={ placeholder }
      />
    </label>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  testID: PropTypes.string,
  text: PropTypes.string,
}.isRequired;

export default Input;
