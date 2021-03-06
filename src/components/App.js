import React from 'react';
import ViewControl from './ViewControl';

import Container from 'react-bootstrap/Container';

function App() {

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
  return (
    <React.Fragment>
      <Container style={containerStyle}>
        <h1>Untitled Machine Learning Puzzle Game!</h1>
        <ViewControl />
      </Container>
    </React.Fragment>
  );
}

export default App;
