import React from 'react';
import { useSelector } from 'react-redux';
import { BAD_FEEDBACK, GOOD_FEEDBACK } from '../helpers/constants';

function FeedbackMsg() {
  const { assertions } = useSelector((state) => state.player);
  let message = BAD_FEEDBACK;
  if (assertions > 2) message = GOOD_FEEDBACK;
  return (
    <h1 data-testid="feedback-text">{message}</h1>
  );
}

export default FeedbackMsg;
