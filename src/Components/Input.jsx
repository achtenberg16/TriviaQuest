import React from 'react';
import PropTypes from 'prop-types';
import { InputLogin } from '../styles/elements/Input';

function Input({ type, name, value, onChange, testID, labelText }) {
  return (
    <label htmlFor={ testID }>
      {labelText}
      <InputLogin
        id={ testID }
        data-testid={ testID }
        type={ type }
        name={ name }
        value={ value }
        onChange={ onChange }
      />
    </label>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  testID: PropTypes.string,
  text: PropTypes.string,
}.isRequired;

export default Input;
