import * as c from './ActionTypes';

export const addTrainingData = (input, output) => ({
  type: c.ADD_DATA,
  input: input,
  output: output
});

export const incrementPlayerScore = () => ({
  type: c.INCREMENT_PLAYER
});

export const incrementAIScore = () => ({
  type: c.INCREMENT_AI
});

export const trainAI = (trainingData) => ({
  type: c.TRAIN_AI
});