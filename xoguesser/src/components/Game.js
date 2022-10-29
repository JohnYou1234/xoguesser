import Display from './Display.js';
import Controls from './Controls.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Results from './Results.js';
import { useEffect, useState } from 'react';
function Game() {
    const [code, setCode] = useState("");
    const [answer, setAnswer] = useState("");
    const [result, setResults] = useState(0) // 0 is none, 1 is correct, 2 is incorrect
    const [id, setId] = useState(false);
    useEffect(() => {
      let link = "api/generateRandom";
      console.log('useeffect ran!');
      fetch(link) 
        .then(res => res.json())
        .then(result => {
            setId(false);
            setCode(result.message);
            setAnswer(result.type);
            setResults(0);
        })
        .catch(err => {
            setAnswer(err.message);
        })
    }, [id])
    return (
    <div className="App">
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
                    <Display code={code}/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Controls reset={() => {setId(true)}} answer={answer} setResults={setResults}/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Results result={result}/>
                </Col>
            </Row>
            
            <Row>
                <Col>
                    <p>Refresh BTN</p>
                </Col>
            </Row>
        </Container>
    </div>
    );
}

export default Game;