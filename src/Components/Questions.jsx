import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { shuffleArray, changeScore } from '../helpers/functions';
import Options from './Options';
import useTimer from '../Hooks/useTimer';
import store from '../redux/store';
import NextButton from './NextButton';
import { setIsAnswered } from '../redux/reducers/questions';

function Questions() {
  const { results, questionNumber: i } = useSelector((state) => state.questions);
  const [time] = useTimer();
  const { score } = useSelector((state) => state.player);
  const [answersShuffled, setAnswersShuffled] = useState([]);

  let index = 0;

  useEffect(() => {
    if (results !== undefined) {
      const answers = [results[i].correct_answer, ...results[i].incorrect_answers];
      setAnswersShuffled(shuffleArray(answers));
    }
  }, [results, i]);

  function handleClick(testid) {
    store.dispatch(setIsAnswered(true));
    if (testid === 'correct-answer') changeScore(time, results[i].difficulty, score);
  }

  return (
    (results !== undefined)
    && (
      <div>
        <p data-testid="question-category">{results[i].category}</p>
        <h1 data-testid="question-text">{results[i].question}</h1>
        <div data-testid="answer-options">
          {answersShuffled.map((ans) => {
            let testid = 'correct-answer';
            if (ans !== results[i].correct_answer) {
              testid = `wrong-answer-${index}`;
              index += 1;
            }
            return (<Options
              key={ ans }
              answer={ ans }
              testid={ testid }
              handleClick={ () => handleClick(testid) }
            />);
          })}
        </div>
        {time}
        {' '}
        <NextButton />
      </div>)

  );
}

export default Questions;
