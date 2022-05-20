import { TOKEN_ENPOINT, QUESTIONS_ENDPOINT,
  CATEGORIES_ENDPOINT,
  ADD_TOKEN,
  FILTER_ENDPOINT } from '../helpers/constants';

export async function fetchToken() {
  const response = await fetch(TOKEN_ENPOINT);
  const data = await response.json();
  return data.token;
}

export async function fetchQuestions(token, query) {
  let response;
  let data;
  if (query !== undefined) {
    response = await fetch(`${FILTER_ENDPOINT}${query}${ADD_TOKEN}${token}`);
    data = await response.json();
  }
  if (!query || data.results.length === 0) {
    response = await fetch(`${QUESTIONS_ENDPOINT}${token}`);
    data = await response.json();
  }
  return data;
}

export async function fetchCategories() {
  const response = await fetch(CATEGORIES_ENDPOINT);
  const data = await response.json();
  return data.trivia_categories;
}
