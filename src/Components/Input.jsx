import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, name, value, onChange, placeholder, testID }) {
  return (
    <input
      data-testid={ testID }
      type={ type }
      name={ name }
      value={ value }
      onChange={ onChange }
      placeholder={ placeholder }
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  testID: PropTypes.string,
}.isRequired;

export default Input;
