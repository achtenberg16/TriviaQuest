import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import REGEX_VALIDATION from '../helpers/constants';
import { fetchToken } from '../services/api';
import { setLocalStorage } from '../services/localStorage';
import { setEmail, setName, setAssertions, setScore } from '../redux/reducers/player';
import store from '../redux/store';
import Input from './Input';
import { setQuestionNumber } from '../redux/reducers/questions';
import { Form } from '../styles/elements/form';
import PlayEnabled from '../images/PlayEnabled.svg';
import PlayDisabled from '../images/PlayDisabled.svg';
import Settings from '../images/Settings.svg';

function LoginForm() {
  const [playerInfos, setPlayerInfos] = useState({
    name: '',
    email: '',
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const { name, email } = playerInfos;
    const MIN_SIZE_NAME = 3;
    const enableButton = REGEX_VALIDATION.email.test(email)
    && name.length >= MIN_SIZE_NAME;
    setIsButtonDisabled(!enableButton);
  }, [playerInfos]);

  useEffect(() => {
    store.dispatch(setQuestionNumber(0));
    store.dispatch(setScore(0));
    store.dispatch(setAssertions(0));
  }, []);

  function handleChange({ target: { name, value } }) {
    setPlayerInfos((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const token = await fetchToken();
    setLocalStorage('token', token);
    store.dispatch(setEmail(playerInfos.email));
    store.dispatch(setName(playerInfos.name));
    history.push('/game');
  }
  return (
    <Form type="submit" onSubmit={ handleSubmit }>

      <Input
        labelText="Nome"
        type="text"
        testID="input-player-name"
        onChange={ handleChange }
        value={ playerInfos.name }
        name="name"
      />

      <Input
        labelText="Email"
        type="email"
        testID="input-gravatar-email"
        onChange={ handleChange }
        value={ playerInfos.email }
        name="email"
      />

      <button
        type="submit"
        data-testid="btn-play"
        disabled={ isButtonDisabled }

      >
        <img
          src={ isButtonDisabled ? PlayDisabled : PlayEnabled }
          alt="Play"
          width="148px"
        />
      </button>

      <button
        data-testid="btn-settings"
        type="button"
        onClick={ () => history.push('/settings') }

      >
        <img
          src={ Settings }
          alt="Play"
        />
      </button>
    </Form>
  );
}

export default LoginForm;
