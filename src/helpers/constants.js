const REGEX_VALIDATION = {
  email: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i,
};

export const TOKEN_ENPOINT = 'https://opentdb.com/api_token.php?command=request';
export const ADD_TOKEN = '&token=';
export const FILTER_ENDPOINT = 'https://opentdb.com/api.php?';
export const QUESTIONS_ENDPOINT = 'https://opentdb.com/api.php?amount=5&token=';
export const CATEGORIES_ENDPOINT = 'https://opentdb.com/api_category.php';
export const ANY_CATEGORY = [{ id: undefined, name: 'Any Category' }];
export const DIFFICULTIES = [
  { id: undefined, name: 'Any Difficulty' },
  { id: 'easy', name: 'Easy' },
  { id: 'medium', name: 'Medium' },
  { id: 'hard', name: 'Hard' }];
export const QUESTIONS_TYPE = [
  { id: undefined, name: 'Any Type' },
  { id: 'multiple', name: 'Multiple Choice' },
  { id: 'boolean', name: 'True / False' }];
export const NUMBER_CHOICE = [
  { id: '5', name: 'Any Amount' },
  { id: '5', name: '5' },
  { id: '6', name: '6' },
  { id: '7', name: '7' },
  { id: '8', name: '8' },
  { id: '9', name: '9' },
  { id: '10', name: '10' }];
export const INVALID_TOKEN_CODE = 3;
export const INITIAL_TIME = 30;
export const ONE_SECOND = 1000;
export const CONSTANT_POINT = 10;
export const HARD_POINT = 3;
export const MEDIUM_POINT = 2;
export const EASY_POINT = 1;
export const BAD_FEEDBACK = 'Could be better...';
export const GOOD_FEEDBACK = 'Well Done!';

export default REGEX_VALIDATION;
