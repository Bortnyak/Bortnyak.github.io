import { Timer } from "./timer"
 
self.addEventListener('message', function(event) {
  console.log("addEventListener function");
  const { duration, display} = event;
  new Timer(duration, display).startTimer();

}, false);
