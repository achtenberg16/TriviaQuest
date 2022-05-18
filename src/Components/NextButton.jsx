import React from 'react';
import { useSelector } from 'react-redux';
import { setIsAnswered, setQuestionNumber } from '../redux/reducers/questions';
import store from '../redux/store';

function NextButton() {
  const { questionNumber: i, isAnswered } = useSelector((state) => state.questions);

  function handleClick() {
    store.dispatch(setIsAnswered(false));
    store.dispatch(setQuestionNumber(i + 1));
  }
  return (
    isAnswered
    && (
      <button type="button" onClick={ handleClick } data-testid="btn-next">
        Next
      </button>)
  );
}

export default NextButton;
