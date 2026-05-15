/**
 * OTP Countdown Timer
 * Objective: Demonstrate repeated asynchronous actions using setInterval.
 */

console.log("OTP Sent Successfully.");

let seconds = 10;
console.log(`Resend OTP available in ${seconds}s...`);

const intervalId = setInterval(() => {
  seconds--;
  
  if (seconds > 0) {
    console.log(`Time remaining: ${seconds}s`);
  }

  if (seconds === 0) {
    console.log("Countdown finished. You can now resend the OTP.");
    clearInterval(intervalId);
  }
}, 1000);
