import React from 'react';
import { connect } from 'react-redux';
import { playView, learnView, dataView } from '../actions';
import LevelControl from './LevelControl';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row'
}

function viewControl(props) {

  const viewChange = (view) => {
    const { dispatch } = props;
    if (view === 'play') {
      dispatch(playView());
    } else if (view === 'learn') {
      dispatch(learnView());
    } else if (view === 'data') {
      dispatch(dataView());
    }
  }

  let visible;
  if (props.view === 'play') {
    visible = <LevelControl />;
  } else if (props.view === 'learn') {
    visible = 'Learn';
  } else if (props.view === 'data') {
    visible = 'Data'
  }
  return (
    <React.Fragment>
      <h1>{visible}</h1>
      <Container style={containerStyle}>
        <Button variant='outline-dark' onClick={()=>viewChange('play')}>Play</Button>
        <Button variant='outline-dark' onClick={()=>viewChange('learn')}>Learn</Button>
        <Button variant='outline-dark' onClick={()=>viewChange('data')}>Visualize</Button>
      </Container>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    view: state.view
  }
}

export default connect(mapStateToProps)(viewControl);