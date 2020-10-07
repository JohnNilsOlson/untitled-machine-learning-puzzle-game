import React from 'react';
import { connect } from 'react-redux';
import { incrementStage, addTrainingData } from '../actions';

import Button from 'react-bootstrap/Button';

class RPSStageOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rock: true,
      paper: false,
      scissors: false
    }
  }

  handleAnswerClick = (input) => {
    const { dispatch } = this.props;
    if (this.state.rock === true && input === 'paper') {
      this.setState({rock: false, paper: true});
      dispatch(addTrainingData({input: 1, output: 2}));
    } else if (this.state.paper === true && input === 'scissors') {
      this.setState({paper: false, scissors: true});
      dispatch(addTrainingData({input: 2, output: 3}));
    } else if (this.state.scissors === true && input === 'rock') {
      this.setState({scissors: false});
      dispatch(addTrainingData({input: 3, output: 1}));
    } else {
      alert('Incorrect!');
    }
  }

  render() {
    let currentStep; 
    if (this.state.rock === true) {
      currentStep = 'What beats rock?'
    } else if (this.state.paper === true) {
      currentStep = 'What beats paper?'
    } else if (this.state.scissors === true) {
      currentStep = 'What beats scissors?'
    }
    return (
      <React.Fragment>
        <h1>Rock, Paper, Scissors - Stage 1</h1>
        <h3>Define the rules of Rock, Paper, Scissors and teach them to your AI</h3>
        <h3>{currentStep}</h3>
        <Button variant='outline-dark' onClick={()=>this.handleAnswerClick('rock')}>Rock</Button>
        <Button variant='outline-dark' onClick={()=>this.handleAnswerClick('paper')}>Paper</Button>
        <Button variant='outline-dark' onClick={()=>this.handleAnswerClick('scissors')}>Scissors</Button>
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