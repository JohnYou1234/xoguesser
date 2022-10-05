import Display from './Display.js';
import Controls from './Controls.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Container className='centered'>
        <Row>
          <Col>
            <p>
            Guess The Input
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <Display />
          </Col>
        </Row>

        <Row>
          <Col>
            <Controls />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
