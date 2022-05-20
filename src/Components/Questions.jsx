import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { shuffleArray, changeScore, createMarkup } from '../helpers/functions';
import Options from './Options';
import useTimer from '../Hooks/useTimer';
import store from '../redux/store';
import NextButton from './NextButton';
import { setIsAnswered } from '../redux/reducers/questions';
import { setAssertions } from '../redux/reducers/player';
import CardQuestion from './CardQuestion';
import { MainContainerQuestion, OptionsContainer } from '../styles/elements/CardQuestion';

function Questions() {
  const { results, questionNumber: i } = useSelector((state) => state.questions);
  const assertions = useSelector((state) => state.player.assertions);
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
    if (testid === 'correct-answer') {
      changeScore(time, results[i].difficulty, score);
      store.dispatch(setAssertions(assertions + 1));
    }
  }

  return (
    (results !== undefined)
    && (
      <>
        <MainContainerQuestion>
          <CardQuestion
            category={ createMarkup(results[i].category) }
            question={ createMarkup(results[i].question) }
            indexQuestion={ i }
            totalQuestions={ results.length }
          />

          <OptionsContainer data-testid="answer-options">
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

          </OptionsContainer>
          {' '}
        </MainContainerQuestion>
        <NextButton />
      </>
    )

  );
}

export default Questions;
