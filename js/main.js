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
  document.querySelectorAll("#days div div.countdown-value")[0].innerText = days;
  document.querySelectorAll("#days div div.countdown-value")[1].innerText = days;
  //Hours
  document.querySelectorAll("#hours div div.countdown-value")[0].innerText = hours;
  document.querySelectorAll("#hours div div.countdown-value")[1].innerText = hours;
  //minutes
  document.querySelectorAll("#minutes div div.countdown-value")[0].innerText = minutes;
  document.querySelectorAll("#minutes div div.countdown-value")[1].innerText = minutes;
  //seconds
  document.querySelectorAll("#seconds div div.countdown-value")[0].innerText = seconds;
  document.querySelectorAll("#seconds div div.countdown-value")[1].innerText = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(countDown);
    document.querySelector("title").innerText = "Launch!";
  }
}, 1000);
