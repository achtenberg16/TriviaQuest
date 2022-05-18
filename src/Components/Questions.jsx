import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import shuffleArray from '../helpers/functions';
import Options from './Options';
import useTimer from '../Hooks/useTimer';
import store from '../redux/store';
import { setIsAnswered } from '../redux/reducers/questions';

function Questions() {
  const [time] = useTimer();
  const { results, questionNumber: i } = useSelector((state) => state.questions);
  const [answersShuffled, setAnswersShuffled] = useState([]);

  let index = 0;

  useEffect(() => {
    if (results !== undefined) {
      const answers = [results[i].correct_answer, ...results[i].incorrect_answers];
      setAnswersShuffled(shuffleArray(answers));
    }
  }, [results, i]);

  function handleClick() {
    store.dispatch(setIsAnswered(true));
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
              handleClick={ handleClick }
            />);
          })}
        </div>
        {time}

      </div>)

  );
}

export default Questions;
