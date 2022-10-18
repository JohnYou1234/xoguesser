import { useEffect, useState } from 'react';

// This is the component to display the generated code from the server
function Code(props) {
  const [code, setCode] = useState('');
  let setAnswer = props.setAnswer;
  useEffect(() => {
    let link = "api/generateRandom";
    fetch(link) 
      .then(res => res.json())
      .then(result => {
        setCode("Your Random Code is " + result.message)
        setAnswer(result.type);
      })
      .catch(err => {
        console.log(err);
        setCode(err.message);
      })
  }, [0])
  return (
    <div className='display'>
      <p>
          {code}
      </p>
    </div>
  )
}

export default Code;