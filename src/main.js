
function startTimer() {
  console.log("Hey, I'm here...");
  const worker = new Worker("src/timer.js");
  const display = document.querySelector('#time');
  const duration = 5000;
  const workerMessage = { duration, display };
  
  worker.postMessage(workerMessage)
}
