import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function Controls() {

    return (
        <div className='controls'>
            <GuessBtn name="Manual"></GuessBtn>
            <GuessBtn name="Random"></GuessBtn>
        </div>
    )
}

const GuessBtn = ({name}) => {
    return (
        <Button variant="primary">
            {name}
        </Button>
    )
}

export default Controls;