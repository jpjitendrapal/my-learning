/*
Create a timer with following functionality
1. STOP button
2. Reset Button

we can keep defaul 5 min time for now
*/

import { useEffect, useRef, useState } from "react";
export default function Timer({ forTime }) {
  const [min, setMin] = useState(forTime / 60 - 1);
  const [sec, setSec] = useState(forTime % 60 || 60);
  const timer = useRef();
  const [start, setStart] = useState(false);
  const resetTimer = () => {
    setMin(forTime / 60 - 1 || 5);
    setSec(forTime % 60 || 60);
    setStart(false);
  };
  const timerComplete = () => {
    resetTimer();
    clearTimeout(timer.current);
  };
  const stopTimer = () => {
    setStart(false);
    clearTimeout(timer.current);
  };
  const startTimer = () => {
    if (start) {
      stopTimer();
    } else {
      setStart(true);
    }
  };

  useEffect(() => {
    if (!start) {
      return;
    }
    timer.current = setTimeout(() => {
      setSec((sec) => {
        if (sec <= 1 && min <= 0) {
          timerComplete();
          return;
        }
        if (sec <= 1) {
          setMin((min) => {
            if (min === 0) {
              timerComplete();
              return;
            }
            return min - 1;
          });
          return min === 0 ? 0 : 59;
        }
        return sec - 1;
      });
    }, 1000);
    return () => {
      clearTimeout(timer.current);
    };
  }, [sec, min, start]);

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <div className="timer-ct">
      <div className="timer-time">
        <span className="font-large">{min}</span>
        <span>m</span>&nbsp;&nbsp;
        <span className="font-large">{sec || 0}</span>
        <span>s</span>
      </div>
      <div className="timer-btns">
        <button onClick={startTimer}>{start ? "STOP" : "START"}</button>
        <button onClick={resetTimer}>RESET</button>
      </div>
    </div>
  );
}
