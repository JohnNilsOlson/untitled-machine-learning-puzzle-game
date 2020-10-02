import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('training datat reducer actions', () => {

  it('addTrainingData should create ADD_DATA action', () => {
    expect(actions.addTrainingData()).toEqual({
      type: c.ADD_DATA
    });
  });
});