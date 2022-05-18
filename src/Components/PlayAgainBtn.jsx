import React from 'react';
import { useHistory } from 'react-router';

function PlayAgainBtn() {
  const history = useHistory();
  return (
    <button
      type="button"
      data-testid="btn-play-again"
      onClick={ () => history.push('/') }
    >
      Play Again
    </button>
  );
}

export default PlayAgainBtn;
