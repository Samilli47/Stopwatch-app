let hours = 0,
  minutes = 0,
  seconds = 0;
let timer = null;
let isRunning = false;

// Update display
function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

// Start Timer
document.getElementById("start").addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
  }
});

// Stop Timer
document.getElementById("stop").addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});

// Reset Timer
document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
});

// Initialize Display
updateDisplay();
