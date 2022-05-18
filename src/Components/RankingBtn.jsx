import React from 'react';
import { useHistory } from 'react-router';

function RankingBtn() {
  const history = useHistory();
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
