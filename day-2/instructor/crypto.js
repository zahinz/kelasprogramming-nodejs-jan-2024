// const crypto = require("crypto");
const crypto = require("node:crypto");

const randomInt = crypto.randomInt(10);
const randomString = crypto.randomBytes(10);

// uuid - Universally Unique Identifier
const uuid = crypto.randomUUID();
const name = "zahin";

console.log(randomInt);
console.log(randomString.toString("hex"));
console.log(uuid);

const nameWithId = name + "-" + randomInt;
// console.log(nameWithId);

// kindly explore encyption and decryption using crypto module

// const secretText = 'The enemy will attack tonight';
// const secretCode = 'gquagsd8et76ye12heb1uysg238ygbhwd23g';

// encrypt and decrypt the secretText using secretCode
