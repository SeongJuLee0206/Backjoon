const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "..", "1330", "input.txt");

const input = fs.readFileSync(filePath, "utf8").toString().trim();

const inputArray = input.split(" ");

const A = parseInt(inputArray[0]);
const B = parseInt(inputArray[1]);

if (A > B) {
  console.log(">");
} else if (A < B) {
  console.log("<");
} else if (A === B) {
  console.log("==");
}
