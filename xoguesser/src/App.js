import { useEffect, useState } from 'react';

function App() {
  const [results, setResults] = useState('');
  let link = "/api/generateRandom";
  useEffect(() => {
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
    <div className="App">
      <header className="App-header">
        <p>
          {results}
        </p>
      </header>
    </div>
  );
}

export default App;
