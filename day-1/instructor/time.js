// time declaration
const time = new Date();
const hours = time.getHours();
const minutes = time.getMinutes();
const seconds = time.getSeconds();
const day = time.getDay();
const month = time.getMonth();

// const object = {
//   time: time,
//   hours: hours,
//   minutes: minutes,
//   seconds: seconds,
//   day: day,
//   month: month,
// };

const object = {
  time,
  hours,
  minutes,
  seconds,
  day,
  month,
};

module.exports = object;
