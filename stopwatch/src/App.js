import ChildComponent from './components/ChildComponent';
import './App.css';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className="App">    
      <div>
        Count: {count}
      </div>
      <br/> <br/>
      <div>
        <button  onClick={handleClick}>
          Increment
        </button>
      </div>
      <br/> <br/>      
      <div>
        <ChildComponent buttonName='Click me'/>
      </div>
    </div>
  );
}

export default App;
