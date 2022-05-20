import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../Components/Header';
import Questions from '../Components/Questions';
import { INVALID_TOKEN_CODE } from '../helpers/constants';
import { setQuestions } from '../redux/reducers/questions';
import store from '../redux/store';
import { fetchQuestions } from '../services/api';
import { getLocalStorage } from '../services/localStorage';

function Game() {
  const history = useHistory();
  const { query } = useSelector((state) => state.questions);

  useEffect(() => {
    const token = getLocalStorage('token');

    async function getQuestions() {
      const { response_code: code, results } = await fetchQuestions(token, query);

      if (code === INVALID_TOKEN_CODE) {
        history.push('/');
        return;
      }

      store.dispatch(setQuestions(results));
    }

    getQuestions();
  }, [history, query]);

  return (
    <div>
      <Header />
      <Questions />
    </div>
  );
}

export default Game;
