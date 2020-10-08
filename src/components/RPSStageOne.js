import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { incrementStage, addTrainingData } from '../actions';

import rockIcon from '../assets/images/rock.png';
import paperIcon from '../assets/images/paper.png';
import scissorsIcon from '../assets/images/scissors.png';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row'
}

const iconButtonStyle = {
  margin: 20,
  height: 100,
  weight: 100
}

const stepIconStyle = {
  margin: 20,
  width: 250,
  height: 250
}

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
        <h3>Identify the Correct Winning Move</h3>
        <img src={currentStep} alt='' style={stepIconStyle}/>
        <br />
        <Container style={containerStyle}>
          <img src={rockIcon} alt='rock' style={iconButtonStyle} onClick={()=>handleAnswerClick('rock')}/>
          <img src={paperIcon} alt='paper'  style={iconButtonStyle} onClick={()=>handleAnswerClick('paper')}/>
          <img src={scissorsIcon} alt='scissors' style={iconButtonStyle} onClick={()=>handleAnswerClick('scissors')}/>
        </Container>
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