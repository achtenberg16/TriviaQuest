import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { generateHash } from '../helpers/functions';
import { getLocalStorage, setLocalStorage } from '../services/localStorage';

function RankingBtn() {
  const history = useHistory();
  const player = useSelector((state) => state.player);
  const pictureUrl = `https://www.gravatar.com/avatar/${generateHash(player.gravatarEmail)}?d=identicon`;
  useEffect(() => {
    const prevRank = JSON.parse(getLocalStorage('ranking')) || [];
    const newRank = [...prevRank, { name: player.name,
      score:
      player.score,
      picture: pictureUrl }];
    setLocalStorage('ranking', JSON.stringify(newRank));
  }, []);

  return (
    <button
      type="button"
      data-testid="btn-ranking"
      onClick={ () => history.push('/ranking') }
    >
      Ranking
    </button>
  );
}

export default RankingBtn;
