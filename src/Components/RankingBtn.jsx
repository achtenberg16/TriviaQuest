import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import md5 from 'crypto-js/md5';
import { getLocalStorage, setLocalStorage } from '../services/localStorage';

function RankingBtn() {
  const history = useHistory();
  const player = useSelector((state) => state.player);
  const hashEmail = md5(player.gravatarEmail).toString();
  const pictureUrl = `https://www.gravatar.com/avatar/${hashEmail}?d=identicon`;
  useEffect(() => {
    const prevRank = getLocalStorage('ranking') || [];
    const newRank = [...prevRank, { name: player.name,
      score:
      player.score,
      picture: pictureUrl }];
    setLocalStorage(JSON.stringify(newRank));
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
