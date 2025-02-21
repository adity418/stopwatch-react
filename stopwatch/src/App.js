import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [time, setTime] = useState(0);

  let timerRef = useRef(null);

  function startTimer() {
    timerRef.current = setInterval(() =>{
      setTime(time => time + 1)
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }
  

  return (
    <div className="App" style={{flex: 1, backgroundColor:'grey', padding: '2px'}}>
        <h1>StopWatch : {time} seconds</h1>
        <button onClick={startTimer} style={{backgroundColor: "green"}}>
          Start
        </button>
        <br/> <br/>
        <button onClick={stopTimer} style={{backgroundColor: "red"}}>
          Stop
        </button>
        <br/> <br/>
        <button onClick={resetTimer} style={{backgroundColor: "blue"}}>
          Reset   
        </button>
        <br/>
    </div>
  );
}

export default App;
