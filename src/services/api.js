import { TOKEN_ENPOINT } from '../helpers/constants';

export async function fetchToken() {
  const response = await fetch(TOKEN_ENPOINT);
  const data = await response.json();
  return data.token;
}

export default fetchToken;
