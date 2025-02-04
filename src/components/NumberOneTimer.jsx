import React from "react";

function NumberOneTimer() {
  let startTime,
    elapsedTime = 0,
    intervalId;

  function startPottyTimer() {
    if (!intervalId) {
      startTime = Date.now() - elapsedTime;
      intervalId = setInterval(updateTime, 10);
    }
  }
  function stopPottyTimer() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
      elapsedTime = Date.now() - startTime;
    }
  }

  function resetPottyTimer() {
    stopPottyTimer();
    elapsedTime = 0;
    updateTime();
  }

  function updateTime() {
    const time = new Date(Date.now() - startTime);
    const formattedTime = formatTime(time);
    document.getElementById("display").textContent = formattedTime;
  }

  function formatTime(time) {
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    const milliseconds = time
      .getMilliseconds()
      .toString()
      .slice(0, 2)
      .padStart(2, "0");

    return `${minutes}:${seconds}.${milliseconds}`;
  }

  return (
    <div>
      <p>Potty timer for Number One</p>
      <button onClick={startPottyTimer}>Start</button>
      <button onClick={stopPottyTimer}>Stop</button>
      <button onClick={resetPottyTimer}>Reset</button>
      <div id="display">00:00.00</div>
    </div>
  );
}

export default NumberOneTimer;
