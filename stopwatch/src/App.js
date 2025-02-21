import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  }

  const btnRef = useRef();

  //  use effect variation on every render
  useEffect(() => {
    console.log("re-render again");
  });

  const handleColor =() => {
    btnRef.current.style.backgroundColor = "red";
  }

  return (
    <div className="App">
      <button ref={btnRef} onClick={handleCount}>Increment</button>
      <br/>
      <button onClick={handleColor}>Change Color</button>
      <br/>
      <div>
        Count: {count}
      </div>
    </div>
  );
}

export default App;
