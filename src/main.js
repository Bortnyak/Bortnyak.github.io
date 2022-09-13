
function startTimer() {
  const worker = new Worker("timer.js");
  const display = document.querySelector('#time');
  const duration = 5000;
  const workerMessage = { duration, display };
  
  worker.postMessage(workerMessage)
}
