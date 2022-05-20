import { combineReducers } from 'redux';
import player from './player';
import questions from './questions';
import settings from './settings';

const rootReducer = combineReducers({
  player,
  questions,
  settings,
});

export default rootReducer;
