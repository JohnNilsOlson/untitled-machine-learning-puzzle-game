import trainingDataReducer from './training-data-reducer';
import playerScoreReducer from './player-score-reducer';
import AIScoreReducer from './ai-score-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  trainingData: trainingDataReducer,
  playerScore: playerScoreReducer,
  AIScore: AIScoreReducer
});

export default rootReducer;