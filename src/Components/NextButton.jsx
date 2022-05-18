import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { NUMBER_OF_QUESTIONS } from '../helpers/constants';
import { setIsAnswered, setQuestionNumber } from '../redux/reducers/questions';
import store from '../redux/store';

function NextButton() {
  const { questionNumber: i, isAnswered } = useSelector((state) => state.questions);
  const history = useHistory();

  function handleClick() {
    store.dispatch(setIsAnswered(false));

    if (i === NUMBER_OF_QUESTIONS) {
      history.push('/feedback');
    } else {
      store.dispatch(setQuestionNumber(i + 1));
    }
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
