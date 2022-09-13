import { Timer } from "./timer"
 
self.addEventListener('message', function(event) {
  const { duration, display} = event;
  new Timer(duration, display).startTimer();

}, false);
