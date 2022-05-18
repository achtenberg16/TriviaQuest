const REGEX_VALIDATION = {
  email: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i,
};

export const TOKEN_ENPOINT = 'https://opentdb.com/api_token.php?command=request';
export const QUESTIONS_ENDPOINT = 'https://opentdb.com/api.php?amount=5&token=';
export const INVALID_TOKEN_CODE = 3;
export const INITIAL_TIME = 30;
export const ONE_SECOND = 1000;
export const CONSTANT_POINT = 10;
export const HARD_POINT = 3;
export const MEDIUM_POINT = 2;
export const EASY_POINT = 1;

export default REGEX_VALIDATION;
