// common js
// const { generate } = require("random-words");

// random-words needs esm to work with node
// need to change the file extension to .mjs
// update package.json script to use node --watch index.mjs
// esm - ECMAScript Modules
import { generate } from "random-words";

console.log(generate({ minLength: 5, maxLength: 5, exactly: 5 }));
