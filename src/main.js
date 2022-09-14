

function startTimer() {
  console.log("Hey, I'm here...");
  
  const worker = new Worker("src/worker.js");
  const display = document.querySelector('#time');
  const duration = 5000;
  const workerMessage = { duration, display };
  
  worker.postMessage(workerMessage)
}

function clickClick() {
  console.log("Click");
  startTimer();
}

export { startTimer, clickClick }