// const firstName = "Ali";
// const lastName = "Azizi";

// template string by using backtick
// const greeting = `Hello, my name is ${firstName} ${lastName}`;

// console.log(greeting);

// const animals = [
//   "🐶",
//   "🐱",
//   "🐭",
//   "🐹",
//   "🐰",
//   "🦊",
//   "🐻",
//   "🐼",
//   "🐨",
//   "🐯",
//   "🦁",
//   "🐮",
//   "🐷",
//   "🐸",
//   "🐙",
//   "🐵",
//   "🦄",
// ];

// for (let i = 0; i < animals.length; i++) {
//   const sentence = `The animal at index ${i} is ${animals[i]}`;
//   console.log(sentence);
// }

// MODULE LESSON STARTS HERE

// best practice to require modules at the top of the file
const m = require("./math.js");
const t = require("./time.js");

console.log("TIME MODULE");
console.log(t.time);
console.log(t.hours);
console.log(t.minutes);
console.log(t.seconds);
console.log(t.day);

const a = m.add(15, 3);
const b = m.subtract(50, 3);
const c = m.multiply(0, 3);

const d = m.add(150, 3);
const e = m.subtract(501, 3);
const f = m.multiply(11, 3);

console.log("MATH MODULE");
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
