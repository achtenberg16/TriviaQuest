import React from 'react';
import { useSelector } from 'react-redux';
import { generateHash } from '../helpers/functions';

function Header() {
  const { name, score, gravatarEmail } = useSelector((state) => state.player);
  const hashEmail = generateHash(gravatarEmail);
  return (
    <header>
      <img data-testid="header-profile-picture" src={ `https://www.gravatar.com/avatar/${hashEmail}` } alt="" />
      <p data-testid="header-player-name">{name}</p>
      <p data-testid="header-score">{score || 0 }</p>
    </header>
  );
}

export default Header;
