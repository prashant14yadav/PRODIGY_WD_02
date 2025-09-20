let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

function updateDisplay() {
  const display = document.getElementById('display');
  let time = elapsedTime;
  
  if (isRunning) {
    time += Date.now() - startTime;
  }

  const milliseconds = Math.floor((time % 1000) / 10);
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);

  display.textContent =
    (minutes < 10 ? '0' : '') + minutes + ':' +
    (seconds < 10 ? '0' : '') + seconds + ':' +
    (milliseconds < 10 ? '0' : '') + milliseconds;
}

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now();
    timer = setInterval(updateDisplay, 10);
  }
}

function pauseStopwatch() {
  if (isRunning) {
    isRunning = false;
    elapsedTime += Date.now() - startTime;
    clearInterval(timer);
  }
}

function resetStopwatch() {
  isRunning = false;
  clearInterval(timer);
  elapsedTime = 0;
  updateDisplay();
  document.getElementById('laps').innerHTML = '';
}

function lapTime() {
  if (isRunning) {
    const lap = document.createElement('li');
    lap.textContent = document.getElementById('display').textContent;
    document.getElementById('laps').appendChild(lap);
  }
}

updateDisplay();
