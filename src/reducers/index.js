import trainingDataReducer from './training-data-reducer';
import playerScoreReducer from './player-score-reducer';
import AIScoreReducer from './ai-score-reducer';
import AIReducer from './ai-reducer';
import userPatternReducer from './user-pattern-reducer';
import stageReducer from './stage-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  trainingData: trainingDataReducer,
  playerScore: playerScoreReducer,
  AIScore: AIScoreReducer,
  AI: AIReducer,
  userPattern: userPatternReducer,
  stage: stageReducer
});

export default rootReducer;