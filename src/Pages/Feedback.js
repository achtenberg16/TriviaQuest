import React from 'react';
import FeedbackMsg from '../Components/FeedbackMsg';
import Header from '../Components/Header';

function Feedback() {
  return (
    <div data-testid="feedback-text">
      <Header />
      <FeedbackMsg />
    </div>);
}

export default Feedback;
