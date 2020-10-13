import React from 'react';
import { connect } from 'react-redux';

function dataControl(props) {
  return (
    <h3>Training Data Visualization Placeholder</h3>
  )
}

const mapStateToProps = state => {
  return {
    level: state.level,
    trainingData: state.trainingData
  }
}

export default connect(mapStateToProps)(dataControl);