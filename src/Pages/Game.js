import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Components/Header';
import Questions from '../Components/Questions';
import Timer from '../Components/Timer';
import { INVALID_TOKEN_CODE } from '../helpers/constants';
import { setQuestions } from '../redux/reducers/questions';
import store from '../redux/store';
import { fetchQuestions } from '../services/api';
import { getLocalStorage } from '../services/localStorage';

function Game() {
  const history = useHistory();

  useEffect(() => {
    const token = getLocalStorage('token');

    async function getQuestions() {
      const { response_code: code, results } = await fetchQuestions(token);

      if (code === INVALID_TOKEN_CODE) {
        history.push('/');
        return;
      }

      store.dispatch(setQuestions(results));
    }

    getQuestions();
  }, [history]);

  return (
    <div>
      <Header />
      <Questions />
      <Timer />
    </div>
  );
}

export default Game;
