const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "..", "1157", "input.txt");

const input = fs.readFileSync(filePath, "utf8").toString().trim().toUpperCase();

const obj = {};

for (const char of input) {
  if (!obj[char]) {
    obj[char] = 1;
  } else {
    obj[char] += 1;
  }
}

let mostFrequentChar = "";
let count = 0;

for (const [key, value] of Object.entries(obj)) {
  if (value > count) {
    count = value;
    mostFrequentChar = key;
  } else if (value === count) {
    mostFrequentChar = "?";
  }
}

console.log(mostFrequentChar);
