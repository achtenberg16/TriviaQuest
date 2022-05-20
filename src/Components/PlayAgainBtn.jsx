import React from 'react';
import { useHistory } from 'react-router';
import { resetQuery } from '../helpers/functions';
import PlayAgain from '../images/PlayAgain.svg';

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
      style={ { backgroundColor: 'transparent' } }
      onClick={ handleClick }
    >
      <img src={ PlayAgain } alt="" />
    </button>
  );
}

export default PlayAgainBtn;
