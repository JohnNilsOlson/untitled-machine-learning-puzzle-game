import brain from 'brain.js/src';
import * as c from '../actions/ActionTypes';

const defaultState = new brain.recurrent.RNN();

export default (state = defaultState, action) => {
  switch (action.type) {
    case c.TRAIN_AI:
      const { trainingData } = action;
      const newState = state;
      newState.train(trainingData, {
        iterations: 500
      });
      return newState;
    default:
      return state;
  }
}