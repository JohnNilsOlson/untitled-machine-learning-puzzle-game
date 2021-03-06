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
  type: c.TRAIN_AI,
  trainingData: trainingData
});

export const addUserInput = (input) => ({
  type: c.ADD_INPUT,
  input: input
});

export const incrementStage = () => ({
  type: c.INCREMENT_STAGE
});

export const levelChange = (level) => ({
  type: c.LEVEL_CHANGE,
  level: level
});

export const playView = () => ({
  type: c.PLAY
});

export const learnView = () => ({
  type: c.LEARN
});

export const dataView = () => ({
  type: c.DATA
});