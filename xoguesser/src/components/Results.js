import { useEffect, useState } from 'react';
/*
This is the component used to render the user's guess result
0 is none, 1 is correct, 2 is incorrect
*/
function Results(props) {
  let result = props.result;

  let text = "";
  if (result == 1) text = "Correct!";
  if (result == 2) text = "Incorrect :(";
  return (
    <div className='results'>
      <p>
          {text}
      </p>
    </div>
  )
}

export default Results;