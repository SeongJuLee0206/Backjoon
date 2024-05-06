const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "..", "2439", "input.txt");

const input = fs.readFileSync(filePath, "utf8").toString();

const A = parseInt(input);

let answer = "";
let blank = "";
for (i = 1; i <= A; i++) {
  answer += "*";

  for (let j = 0; j < A - i; j++) {
    blank += " ";
  }
  console.log(blank + answer);

  blank = "";
}
