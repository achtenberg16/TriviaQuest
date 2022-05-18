import React from 'react';
import FeedbackMsg from '../Components/FeedbackMsg';
import Header from '../Components/Header';
import PlayAgainBtn from '../Components/PlayAgainBtn';
import RankingBtn from '../Components/RankingBtn';

function Feedback() {
  return (
    <div>
      <Header />
      <FeedbackMsg />
      <PlayAgainBtn />
      <RankingBtn />
    </div>);
}

export default Feedback;
