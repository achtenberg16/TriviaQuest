import React from 'react';
import FeedbackMsg from '../Components/FeedbackMsg';
import Header from '../Components/Header';
import PlayAgainBtn from '../Components/PlayAgainBtn';
import RankingBtn from '../Components/RankingBtn';
import { MainContainerFeedback } from '../styles/elements/Feedback';

function Feedback() {
  return (
    <>
      <Header />
      <MainContainerFeedback>
        <FeedbackMsg />
        <PlayAgainBtn />
        <RankingBtn />
      </MainContainerFeedback>
    </>);
}

export default Feedback;
