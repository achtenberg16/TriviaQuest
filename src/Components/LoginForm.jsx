import React, { useState, useEffect } from 'react';
import REGEX_VALIDATION from '../helpers/constants';
import { setEmail } from '../redux/reducers/player';
import store from '../redux/store';

function LoginForm() {
  const [playerInfos, setPlayerInfos] = useState({
    name: '',
    email: '',
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

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

  function handleSubmit(e) {
    e.preventDefault();
    store.dispatch(setEmail(playerInfos.email));
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
    </form>
  );
}

export default LoginForm;
