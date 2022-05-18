import React from 'react';
import md5 from 'crypto-js/md5';
import { useSelector } from 'react-redux';

function Header() {
  const { name, score, gravatarEmail } = useSelector((state) => state.player);
  const hashEmail = md5(gravatarEmail).toString();
  return (
    <header>
      <img data-testid="header-profile-picture" src={ `https://www.gravatar.com/avatar/${hashEmail}` } alt="" />
      <p data-testid="header-player-name">{name}</p>
      <p data-testid="header-score">{score || 0 }</p>
    </header>
  );
}

export default Header;
