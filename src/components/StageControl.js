import React from 'react';
import { connect } from 'react-redux';
import RPSStageOne from './RPSStageOne';
import RPSStageTwo from './RPSStageTwo';

function stageControl(props) {
  if (props.stage === 1) {
    return <RPSStageOne />
  } else {
    return <RPSStageTwo />
  }
}

const mapStateToProps = state => {
  return {
    stage: state.stage
  }
}

export default connect(mapStateToProps)(stageControl);
