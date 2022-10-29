import { useEffect, useState } from 'react';

// This is the component to display the generated code from the server
function Code(props) {
  let code = props.code;
  return (
    <div className='display'>
      <p>
          {code}
      </p>
    </div>
  )
}

export default Code;