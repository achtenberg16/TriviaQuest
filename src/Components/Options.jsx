import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Options(props) {
  const { answer, testid, handleClick, isAnswered } = props;
  console.log(isAnswered);
  let className = 'incorrect-answer';
  if (testid.includes('correct')) {
    className = 'correct-answer';
  }

  return (
    <button
      type="button"
      data-testid={ testid }
      className={ isAnswered ? className : null }
      onClick={ handleClick }
    >
      {answer}
    </button>);
}

Options.propTypes = {
  answer: PropTypes.string,
  testid: PropTypes.string,
  handleClick: PropTypes.func,
  isAnswered: PropTypes.bool,
}.isRequired;

export default Options;
