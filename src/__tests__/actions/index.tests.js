import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('training datat reducer actions', () => {

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
});