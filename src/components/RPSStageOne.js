import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { incrementStage, addTrainingData } from '../actions';

import rockIcon from '../assets/images/rock.png';
import paperIcon from '../assets/images/paper.png';
import scissorsIcon from '../assets/images/scissors.png';

import Button from 'react-bootstrap/Button';

function RPSStageOne(props) {

  const [ rock, setRock ]  = useState(true);
  const [ paper, setPaper ] = useState(false);
  const [scissors, setScissors ] = useState(false);

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
    currentStep = rockIcon;
  } else if (paper === true) {
    currentStep = paperIcon;
  } else if (scissors === true) {
    currentStep = scissorsIcon;
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
        <img src={currentStep} alt='' width='250' height='250' />
        <br />
        <img src={rockIcon} alt='rock' width='100' height='100' onClick={()=>handleAnswerClick('rock')}/>
        <img src={paperIcon} alt='paper'  width='100' height='100' onClick={()=>handleAnswerClick('paper')}/>
        <img src={scissorsIcon} alt='scissors' width='100' height='100' onClick={()=>handleAnswerClick('scissors')}/>
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