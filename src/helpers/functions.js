import md5 from 'crypto-js/md5';
import { setScore } from '../redux/reducers/player';
import store from '../redux/store';
import { CONSTANT_POINT, EASY_POINT, HARD_POINT, MEDIUM_POINT } from './constants';

export function shuffleArray(array) {
  const O_FIVE = 0.5;
  const newArray = array.sort(() => Math.random() - O_FIVE);
  return newArray;
}

export function changeScore(time, difficulty, score) {
  let value;
  switch (difficulty) {
  case 'hard':
    value = HARD_POINT;
    break;
  case 'medium':
    value = MEDIUM_POINT;
    break;
  default: value = EASY_POINT;
    break;
  }
  store.dispatch(setScore(+score + CONSTANT_POINT + (time * value)));
}

export function generateHash(email) {
  return md5(email).toString();
}

export function createMarkup(html) {
  return { __html: html };
}
