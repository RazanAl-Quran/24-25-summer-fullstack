import React, { useState } from 'react';
import Greetings from './Greetings';
import People from './People';

function App() {
  // let count = 0;
  // count =1;
  const [count, setCount] = useState(0);
  const handleClick = () => {
    // count ++;
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked me {count} counts</p>
      <button onClick={handleClick}>Click Me</button>

      <Greetings username="sherry" count={count} />

      <People/>
    </div>
  );
}

export default App;
