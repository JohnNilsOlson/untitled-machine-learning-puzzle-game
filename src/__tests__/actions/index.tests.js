import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('reducer actions', () => {

  it('addTrainingData should create ADD_DATA action', () => {
    expect(actions.addTrainingData()).toEqual({
      type: c.ADD_DATA
    });
  });

  it('incrementPlayerScore should create INCREMENT_PLAYER action', () => {
    expect(actions.incrementPlayerScore()).toEqual({
      type: c.INCREMENT_PLAYER
    });
  });

  it('incrementAIScore should create INCREMENT_AI action', () => {
    expect(actions.incrementAIScore()).toEqual({
      type: c.INCREMENT_AI
    });
  });

  it('trainAI should create TRAIN_AI action', () => {
    expect(actions.trainAI()).toEqual({
      type: c.TRAIN_AI
    });
  });

  it('addUserInput should creat ADD_INPUT action', () => {
    expect(actions.addUserInput()).toEqual({
      type: c.ADD_INPUT
    });
  });

  it('incrementStage should creat INCREMENT_STAGE action', () => {
    expect(actions.incrementStage()).toEqual({
      type: c.INCREMENT_STAGE
    });
  });

  it('levelChange should creat LEVEL_CHANGE action', () => {
    expect(actions.levelChange()).toEqual({
      type: c.LEVEL_CHANGE
    });
  });
});