const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "..", "2741", "input.txt");
let input = fs.readFileSync(filePath, "utf8").toString().trim();
let number = parseInt(input);

let result = "";

for (let i = 1; i <= number; i++) {
  result += i + "\n";
}

console.log(result);