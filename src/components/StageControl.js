import React from 'react';
import { connect } from 'react-redux';
import RockPaperScissors from './RockPaperScissors';

function StageControl(props) {
  if (props.currentStage === 1) {
    return <h1>Rock Paper Scissors Stage 1</h1>
  } else {
    return <h1>Rock Paper Scissors Stage 2</h1>
  }
}

export default StageControl;
