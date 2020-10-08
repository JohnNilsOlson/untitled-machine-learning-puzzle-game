import trainingDataReducer from './training-data-reducer';
import userPatternReducer from './user-pattern-reducer';
import stageReducer from './stage-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  trainingData: trainingDataReducer,
  userPattern: userPatternReducer,
  stage: stageReducer
});

export default rootReducer;