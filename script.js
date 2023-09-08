const day = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const time = document.querySelector('[data-testid="currentUTCTime"]')

const date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const utcTimeInMilliseconds = date.getTime();
console.log(utcTimeInMilliseconds); //will output the current UTC time in milliseconds
const dayName = days[date.getDay()];
console.log(dayName);  //will output the name of the current day

day.textContent = dayName;
time.textContent = utcTimeInMilliseconds;