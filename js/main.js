//Kimmo's birthday
//const countDownDate = new Date("Jan 29, 2022 00:00:00").getTime();
let now = new Date().getTime();
const countDownDate = 14 * 60 * 60 * 24 * 1000 + now;

// Update the count down every 1 second
const countDown = setInterval(function () {
  // Get today's date and time
  now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, "0");
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, "0");

  // Display results
  //Days
  document.querySelector("#days div.countdown-value").innerText = days;
  //Hours
  document.querySelector("#hours div.countdown-value").innerText = hours;
  //minutes
  document.querySelector("#minutes div.countdown-value").innerText = minutes;
  //seconds
  document.querySelector("#seconds div.countdown-value").innerText = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(countDown);
    document.querySelector("title").innerText = "Launch!";
  }
}, 1000);
