import React, { useState } from "react";

function NumberOneTimer() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [timeArr, setTimeArr] = useState([]);

  let startTime;

  function startPottyTimer() {
    if (!intervalId) {
      startTime = Date.now() - elapsedTime;
      const id = setInterval(updateTime, 10);
      setIntervalId(id);
    }
  }

  function stopPottyTimer() {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setElapsedTime(Date.now() - startTime);
      setTimeArr([...timeArr, elapsedTime]);
    }
  }

  function resetPottyTimer() {
    stopPottyTimer();
    setElapsedTime(0);
  }

  function updateTime() {
    const time = new Date(Date.now() - startTime);
    const formattedTime = formatTime(time);
    setElapsedTime(Date.now() - startTime);
  }

  function formatTime(time) {
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  return (
    <div>
      <p>Potty timer for Number One</p>
      <button onClick={startPottyTimer}>Start</button>
      <button onClick={stopPottyTimer}>Stop</button>
      <button onClick={resetPottyTimer}>Reset</button>
      {!elapsedTime ? (
        <div>00:00</div>
      ) : (
        <div>{formatTime(new Date(elapsedTime))}</div>
      )}
      {timeArr.length > 0 && (
        <ul>
          {timeArr.map((time, index) => (
            <li key={index}>{formatTime(new Date(time))}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NumberOneTimer;
