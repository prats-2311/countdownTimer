const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2023, 10, 23, 23, 23, 23);
// let futureDate = new Date();

// console.log(futureDate);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const date = futureDate.getDate();
let weekday = weekdays[futureDate.getDay()];
let month = months[futureDate.getMonth()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month}, ${year}, ${hours}:${mins}am`;

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureDate - today;
  // calculate daily time in millisecs
  const oneSec = 1000;
  const oneMin = 1000 * 60;
  const oneHour = 1000 * 60 * 60;
  const oneDay = 1000 * 60 * 60 * 24;
  //days
  let days = Math.floor(t / oneDay);
  // console.log(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  // console.log(hours);
  let mins = Math.floor((t % oneHour) / oneMin);
  let secs = Math.floor((t % oneMin) / oneSec);
  // set values array
  function formatTime(value) {
    if (value < 10) {
      return (value = `0${value}`);
    }
    return value;
  }
  const values = [days, hours, mins, secs];
  items.forEach(function (item, index) {
    item.innerHTML = formatTime(values[index]);
  });
  if (t < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`;
  }
}
const countDown = setInterval(getRemainingTime, 1000);
getRemainingTime();
