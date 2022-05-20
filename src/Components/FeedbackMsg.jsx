import React from 'react';
import { useSelector } from 'react-redux';
import { BAD_FEEDBACK, GOOD_FEEDBACK } from '../helpers/constants';
import { H1feedback, H2Feedback, Pfedback } from '../styles/elements/Feedback';

function FeedbackMsg() {
  const { assertions, score } = useSelector((state) => state.player);
  let message = BAD_FEEDBACK;
  if (assertions > 2) message = GOOD_FEEDBACK;
  return (
    <>
      <H1feedback>Feddback</H1feedback>
      <H2Feedback data-testid="feedback-text">{message}</H2Feedback>
      <Pfedback data-testid="feedback-total-question">
        Assertions:
        {' '}
        <br />
        {assertions}
      </Pfedback>
      <Pfedback data-testid="feedback-total-score">
        Score
        <br />
        {score}
      </Pfedback>
    </>
  );
}

export default FeedbackMsg;
