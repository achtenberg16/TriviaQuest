import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import REGEX_VALIDATION from '../helpers/constants';
import { fetchToken } from '../services/api';
import { setLocalStorage } from '../services/localStorage';
import { setEmail, setName } from '../redux/reducers/player';
import store from '../redux/store';

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

  function handleChange({ target: { name, value } }) {
    setPlayerInfos((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const token = await fetchToken();
    console.log(token);
    setLocalStorage('token', token);
    store.dispatch(setEmail(playerInfos.email));
    store.dispatch(setName(playerInfos.name));
    history.push('/game');
  }
  return (
    <form type="submit" onSubmit={ handleSubmit }>
      <input
        type="text"
        data-testid="input-player-name"
        onChange={ handleChange }
        value={ playerInfos.name }
        name="name"
      />
      <input
        type="text"
        data-testid="input-gravatar-email"
        onChange={ handleChange }
        value={ playerInfos.email }
        name="email"
      />

      <button
        type="submit"
        data-testid="btn-play"
        disabled={ isButtonDisabled }
      >
        Play
      </button>
      <button
        data-testid="btn-settings"
        type="button"
        onClick={ () => history.push('/settings') }
      >
        settings
      </button>
    </form>
  );
}

export default LoginForm;
