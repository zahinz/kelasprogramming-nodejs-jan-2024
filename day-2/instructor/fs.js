const fs = require("fs");
const crypto = require("crypto");

const randomInt = crypto.randomInt(0, 10000);

// create a directory
fs.mkdir(`./fs-files/${randomInt}`, { recursive: true }, (err) => {
  if (err) {
    console.log("directory not created");
  } else {
    console.log("directory created");
  }
});

fs.writeFile(
  `./fs-files/${randomInt}/message-${randomInt}.txt`,
  `Hello Node.js with random number ${randomInt}!`,
  "utf8",
  function (err) {
    if (err) {
      console.log("file not written");
    } else {
      console.log("file written");
    }
  }
);

fs.readFile(
  `./fs-files/${randomInt}/message-${randomInt}.txt`,
  "utf8",
  function (err, data) {
    if (err) {
      console.log("file not read");
    } else {
      console.log("THIS IS THE DATA FROM THE FILE");
      console.log(data);
    }
  }
);
