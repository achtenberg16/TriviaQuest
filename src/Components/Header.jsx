import React from 'react';
import { useSelector } from 'react-redux';
import { generateHash } from '../helpers/functions';
import { HeaderS, DivHeader, ImgHeader } from '../styles/elements/Header';

function Header() {
  const { name, score, gravatarEmail } = useSelector((state) => state.player);
  const hashEmail = generateHash(gravatarEmail);
  return (
    <HeaderS>
      <DivHeader>
        <ImgHeader data-testid="header-profile-picture" src={ `https://www.gravatar.com/avatar/${hashEmail}` } alt="" />
        <p data-testid="header-player-name">{name}</p>
        <p data-testid="header-score">{score || 0 }</p>
      </DivHeader>
    </HeaderS>
  );
}

export default Header;
