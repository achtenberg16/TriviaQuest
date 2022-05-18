import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import shuffleArray from '../helpers/functions';
import Options from './Options';
// import store from '../redux/store';
// import { setQuestionNumber } from '../redux/reducers/questions';

function Questions() {
  const { results, questionNumber: i } = useSelector((state) => state.questions);
  const [isAnswered, setIsAnswered] = useState(false);
  let answersShuffled = [];
  let index = 0;

  if (results !== undefined) {
    const answers = [results[i].correct_answer, ...results[i].incorrect_answers];

    answersShuffled = shuffleArray(answers);
  }

  // function changeQuestion() {
  //   setIsAnswered(false);
  //   store.dispatch(setQuestionNumber(i + 1));
  // }

  function handleClick() {
    setIsAnswered(true);
    // changeQuestion();
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
              isAnswered={ isAnswered }
            />);
          })}
        </div>

      </div>)

  );
}

export default Questions;
