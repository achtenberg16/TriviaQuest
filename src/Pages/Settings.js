import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { ANY_CATEGORY, DIFFICULTIES,
  NUMBER_CHOICE, QUESTIONS_TYPE } from '../helpers/constants';
import { setQuery } from '../redux/reducers/questions';
import store from '../redux/store';
import { fetchCategories } from '../services/api';
import { CardSettings, H1Settings, Select } from '../styles/elements/CardSettings';
import saveButton from '../images/saveButon.svg';

function Settings() {
  const [categories, setCategories] = useState(ANY_CATEGORY);
  const [amount, setAmount] = useState(NUMBER_CHOICE[0].id);
  const [categorySelected, setCategorySelected] = useState(ANY_CATEGORY[0].id);
  const [difficultySelected, setDifficultySelected] = useState(DIFFICULTIES[0].id);
  const [typeSelected, setTypeSelected] = useState(QUESTIONS_TYPE[0].id);
  const history = useHistory();

  useEffect(() => {
    async function getCategories() {
      const allCategories = await fetchCategories();
      setCategories((prevState) => [...prevState, ...allCategories]);
    }
    getCategories();
  }, []);

  function generateQuery() {
    let query = '';
    if (amount) query += `amount=${amount}`;
    if (categorySelected) query += `&category=${categorySelected}`;
    if (difficultySelected) query += `&difficulty=${difficultySelected}`;
    if (typeSelected) query += `&type=${typeSelected}`;
    return query;
  }

  function saveChanges() {
    store.dispatch(setQuery(generateQuery()));
    history.push('/');
  }

  return (
    <CardSettings>
      <H1Settings data-testid="settings-title">
        Settings
      </H1Settings>

      <label htmlFor="quantity">
        Amount:
        <Select
          id="quantity"
          onChange={ ({ target }) => setAmount(target.value) }
        >
          {NUMBER_CHOICE.map(({ name, id }) => (
            <option key={ name } value={ id }>{ name }</option>))}
        </Select>
      </label>

      <label htmlFor="category">
        Category:
        <Select
          id="category"
          onChange={ ({ target }) => setCategorySelected(target.value) }
        >
          {categories.map(({ name, id }) => (
            <option key={ name } value={ id }>{ name }</option>))}
        </Select>
      </label>

      <label htmlFor="Difficulty">
        Difficulty:
        <Select
          id="difficulty"
          onChange={ ({ target }) => setDifficultySelected(target.value) }
        >
          {DIFFICULTIES.map(({ name, id }) => (
            <option key={ name } value={ id }>{ name }</option>))}
        </Select>
      </label>

      <label htmlFor="type">
        Type:
        <Select
          id="type"
          onChange={ ({ target }) => setTypeSelected(target.value) }
        >
          {QUESTIONS_TYPE.map(({ name, id }) => (
            <option key={ name } value={ id }>{ name }</option>))}
        </Select>
      </label>

      <button
        type="button"
        onClick={ () => saveChanges() }
      >
        <img src={ saveButton } alt="save" />
      </button>
    </CardSettings>
  );
}

export default Settings;
