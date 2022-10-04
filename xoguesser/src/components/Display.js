import { useEffect, useState } from 'react';

function Display() {
    const [results, setResults] = useState('');

    useEffect(() => {
      let link = "api/generateRandom";
      fetch(link) 
        .then(res => res.json())
        .then(result => {
          setResults("Your Random Code is " + result.message)
        })
        .catch(err => {
          console.log(err);
          setResults(err.message);
        })
    }, [0])
    return (
      <div className='display'>
        <p>
            {results}
        </p>
      </div>
    )
}

export default Display;