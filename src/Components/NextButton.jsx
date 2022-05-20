import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useTimer from '../Hooks/useTimer';
import { setIsAnswered, setQuestionNumber } from '../redux/reducers/questions';
import store from '../redux/store';
import { NextButtonStyled } from '../styles/elements/CardQuestion';

function NextButton() {
  const { results, questionNumber: i,
    isAnswered } = useSelector((state) => state.questions);
  const [time] = useTimer();
  const history = useHistory();

  function handleClick() {
    store.dispatch(setIsAnswered(false));

    if (i === results.length - 1) {
      history.push('/feedback');
    } else {
      store.dispatch(setQuestionNumber(i + 1));
    }
  }
  return (
    (isAnswered || time === 0)
     && (
       <NextButtonStyled type="button" onClick={ handleClick } data-testid="btn-next">
         Next
       </NextButtonStyled>)
  );
}

export default NextButton;
