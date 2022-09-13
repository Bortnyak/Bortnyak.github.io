
class Timer {
  duration = null;
  timerId = null;
  remaining = null;
  start = null;
  diff = null;

  minutes = null;
  seconds = null;


  constructor(duration, display) {
    this.duration = duration;
    this.display = display
  }

  timer() {
    // get the number of seconds that have elapsed since 
    // startTimer() was called
    this.diff = this.duration - (((Date.now() - this.start) / 1000) | 0);

    // does the same job as parseInt truncates the float
    this.minutes = (this.diff / 60) | 0;
    this.seconds = (this.diff % 60) | 0;

    this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

    this.display.textContent = minutes + ":" + seconds; 

    if (diff <= 0) {
      // add one second so that the count down starts at the full duration
      // example 05:00 not 04:59
      start = Date.now() + 1000;
    }
  }

  startTimer() {
    const timer = this.timer();
    this.timerId = setInterval(timer, 1000);
  }

  // pause() {
  //   window.clearInterval(this.timerId);
  //   this.timerId = null;
  //   this.remaining -= Date.now() - this.delay;
  // }

  // resume() {
  //   if (this.timerId) return;
  //   this.start = new Date();
  //   this.timerId = setInterval(this.cb, this.remaining);
  // }
}

module.exports = Timer;
