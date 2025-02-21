import logo from './logo.svg';
import './App.css';
import { useEffect, useMemo, useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expexsiveTask(num) {
    console.log("task");
    for(let i=0; i<=10; i++){}
    return num*2;
  }

  let doubleValue = useMemo(() => expexsiveTask(input), [input]);

  return (
    <div className="App">
      <button  onClick={() => 
    setCount(count + 1)}>Increment</button>
      
      <div>
        Count: {count}
      </div>
      <input 
        type='number'
        placeholder='enter number'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>
        Double: {doubleValue}
      </div>
    </div>
  );
}

export default App;
