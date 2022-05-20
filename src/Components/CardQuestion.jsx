import React from 'react';
import Proptypes from 'prop-types';
import useTimer from '../Hooks/useTimer';
import { MainContainer,
  ContainerHeader, SpanTimer,
  Questiontext, ParagBotton } from '../styles/elements/CardQuestion';

function CardQuestion({ question, category, totalQuestions, indexQuestion }) {
  const [time] = useTimer();
  return (
    <MainContainer>

      <ContainerHeader>
        <p style={ { fontWeight: '500' } }>
          Category:
          {' '}
          <br />
          <span
            style={ { fontWeight: '600' } }
            data-testid="question-category"
            dangerouslySetInnerHTML={ category }
          />
        </p>
        <p>
          Timer:
          {' '}
          <SpanTimer>{time}</SpanTimer>
        </p>
      </ContainerHeader>

      <div>
        <Questiontext
          data-testid="question-text"
          dangerouslySetInnerHTML={ question }
        />
        <ParagBotton>
          <span>
            {indexQuestion}
            /
            {totalQuestions}
          </span>
          <span
            style={ { color: '#88f0c0', fontWeight: '600', fontSize: '64px' } }
          >
            ?
          </span>
        </ParagBotton>
      </div>

    </MainContainer>
  );
}

CardQuestion.propTypes = {
  question: Proptypes.string,
  category: Proptypes.string,
  totalQuestions: Proptypes.number,
  indexQuestion: Proptypes.number,
}.isRequired;

export default CardQuestion;
