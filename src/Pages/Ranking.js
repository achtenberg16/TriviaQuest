import React from 'react';
import { useHistory } from 'react-router';
import { resetQuery } from '../helpers/functions';
import { getLocalStorage } from '../services/localStorage';
import { CardRanking, Hr, Player, PlayerImg, RankingNumber,
  RankingResult, RankingText } from '../styles/elements/CardRanking';
import { H1Settings } from '../styles/elements/CardSettings';
import homeButton from '../images/homeButton.svg';

function Ranking() {
  const history = useHistory();
  const ranking = JSON.parse(getLocalStorage('ranking'));
  ranking.sort((a, b) => b.score - a.score);

  function handleClick() {
    resetQuery();
    history.push('/');
  }

  return (
    <CardRanking>
      <H1Settings data-testid="ranking-title"> Ranking</H1Settings>
      <RankingResult>
        {ranking.map((player, index) => (
          <>
            <Player key={ index }>
              <Player>
                <RankingNumber>{`${index + 1}º`}</RankingNumber>
                <PlayerImg src={ player.picture } alt="" />
              </Player>
              <RankingText data-testid={ `player-name-${index}` }>
                {player.name}
              </RankingText>
              <RankingText data-testid={ `player-score-${index}` }>
                {player.score}
                pts
              </RankingText>
            </Player>
            <Hr />
          </>
        ))}
      </RankingResult>
      <button type="button" data-testid="btn-go-home" onClick={ handleClick }>
        <img src={ homeButton } alt="home" />
      </button>
    </CardRanking>
  );
}

export default Ranking;
