import React from 'react';
import { useHistory } from 'react-router';
import { resetQuery } from '../helpers/functions';
import { getLocalStorage } from '../services/localStorage';

function Ranking() {
  const history = useHistory();
  const ranking = JSON.parse(getLocalStorage('ranking'));
  ranking.sort((a, b) => b.score - a.score);

  function handleClick() {
    resetQuery();
    history.push('/');
  }

  return (
    <div>
      <h1 data-testid="ranking-title"> Ranking</h1>
      <div>
        {ranking.map((player, index) => (
          <div key={ index }>
            <span data-testid={ `player-name-${index}` }>{player.name}</span>
            <span data-testid={ `player-score-${index}` }>{player.score}</span>
            <img src={ player.picture } alt="" />
          </div>
        ))}
      </div>
      <button
        type="button"
        data-testid="btn-go-home"
        onClick={ handleClick }
      >
        Play Again
      </button>
    </div>);
}

export default Ranking;
