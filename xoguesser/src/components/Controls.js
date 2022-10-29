import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function Controls(props) {
    let answer = props.answer;
    let setResults = props.setResults;
    const checkAnswer = function(name) {
        let one = name.toLowerCase();
        let two = answer.toLowerCase();
        setResults(one == two ? 1 : 2)
        setTimeout(() => {
            props.reset(true);
        }, "1000")
    }

    const GuessBtn = ({name}) => {
        return (
            <Button variant="primary" onClick={() => {checkAnswer(name)}}>
                {name}
            </Button>
        )
    }
    return (
        <div className='controls'>
            <GuessBtn name="Manual"></GuessBtn>
            <GuessBtn name="Random"></GuessBtn>
        </div>
    )
}

export default Controls;