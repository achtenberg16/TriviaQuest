import { TOKEN_ENPOINT, QUESTIONS_ENDPOINT } from '../helpers/constants';

export async function fetchToken() {
  const response = await fetch(TOKEN_ENPOINT);
  const data = await response.json();
  return data.token;
}

export async function fetchQuestions(token) {
  const response = await fetch(`${QUESTIONS_ENDPOINT}${token}`);
  const data = await response.json();
  return data;
}
