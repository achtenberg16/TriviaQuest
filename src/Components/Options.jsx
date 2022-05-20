import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { useSelector } from 'react-redux';
import useTimer from '../Hooks/useTimer';
import { OptionButton } from '../styles/elements/CardQuestion';
import { createMarkup } from '../helpers/functions';

function Options(props) {
  const [time] = useTimer();
  const { answer, testid, handleClick } = props;
  const { isAnswered } = useSelector((state) => state.questions);

  let className = 'incorrect-answer';
  if (testid.includes('correct')) {
    className = 'correct-answer';
  }

  return (
    <OptionButton
      type="button"
      data-testid={ testid }
      className={ isAnswered || time === 0 ? className : null }
      onClick={ handleClick }
      disabled={ time === 0 || isAnswered }
      dangerouslySetInnerHTML={ createMarkup(answer) }
    />);
}

Options.propTypes = {
  answer: PropTypes.string,
  testid: PropTypes.string,
  handleClick: PropTypes.func,
}.isRequired;

export default Options;
