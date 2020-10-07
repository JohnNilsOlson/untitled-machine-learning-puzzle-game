import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { incrementStage, addTrainingData } from '../actions';

import Button from 'react-bootstrap/Button';

function RPSStageOne(props) {
  const  [ rock, setRock ]  = useState(true);
  const [ paper, setPaper ] = useState(false);
  const  [scissors, setScissors ] = useState(false);

  const handleAnswerClick = (input) => {
    const { dispatch } = props;
    if (rock === true && input === 'paper') {
      setRock(false);
      setPaper(true);
      dispatch(addTrainingData(1,2));
    } else if (paper === true && input === 'scissors') {
      setPaper(false);
      setScissors(true);
      dispatch(addTrainingData(2,3));
    } else if (scissors === true && input === 'rock') {
      setScissors(false);
      dispatch(addTrainingData(3,1));
    } else {
      alert('Incorrect!');
    }
  }

  const stageChange = () => {
    const { dispatch } = props;
    dispatch(incrementStage());
  }

  let currentStep; 
  if (rock === true) {
    currentStep = 'What beats rock?'
  } else if (paper === true) {
    currentStep = 'What beats paper?'
  } else if (scissors === true) {
    currentStep = 'What beats scissors?'
  }
  if (rock === false && paper === false && scissors === false) {
    return (
      <React.Fragment>
        <h1>Rock, Paper, Scissors - Stage 1</h1>
        <h3>Well done!</h3>
        <Button variant='outline-dark' onClick={()=>stageChange()}>Train</Button>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h1>Rock, Paper, Scissors - Stage 1</h1>
        <h3>Define the rules of Rock, Paper, Scissors and teach them to your AI</h3>
        <h3>{currentStep}</h3>
        <Button variant='outline-dark' onClick={()=>handleAnswerClick('rock')}>Rock</Button>
        <Button variant='outline-dark' onClick={()=>handleAnswerClick('paper')}>Paper</Button>
        <Button variant='outline-dark' onClick={()=>handleAnswerClick('scissors')}>Scissors</Button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    stage: state.stage,
    trainingData: state.trainingData
  }
}

export default connect(mapStateToProps)(RPSStageOne);