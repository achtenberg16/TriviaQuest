import React from 'react';
import { useSelector } from 'react-redux';
import { BAD_FEEDBACK, GOOD_FEEDBACK } from '../helpers/constants';

function FeedbackMsg() {
  const { assertions, score } = useSelector((state) => state.player);
  let message = BAD_FEEDBACK;
  if (assertions > 2) message = GOOD_FEEDBACK;
  return (
    <div>
      <h1 data-testid="feedback-text">{message}</h1>
      <p data-testid="feedback-total-score">{score}</p>
      <p data-testid="feedback-total-question">{assertions}</p>
    </div>
  );
}

export default FeedbackMsg;
