const path = require("path");
const fs = require("fs");

const textPath = path.join(__dirname, "fs-files", "850", "message-850.txt");
const extFile = path.extname(textPath);

// console.log(__dirname);
// console.log(__filename);
console.log(textPath);

if (extFile === ".jpeg") {
  console.log("This is a jpeg file");
} else {
  console.log("This is not a jpeg file");
}

fs.readFile(textPath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
