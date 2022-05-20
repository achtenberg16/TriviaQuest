import React from 'react';
import { useHistory } from 'react-router';
import { resetQuery } from '../helpers/functions';

function PlayAgainBtn() {
  const history = useHistory();

  function handleClick() {
    resetQuery();
    history.push('/');
  }

  return (
    <button
      type="button"
      data-testid="btn-play-again"
      onClick={ handleClick }
    >
      Play Again
    </button>
  );
}

export default PlayAgainBtn;
