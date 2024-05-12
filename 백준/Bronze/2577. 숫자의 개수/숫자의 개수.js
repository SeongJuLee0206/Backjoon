const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "..", "2577", "input.txt");

let input = fs.readFileSync(filePath, "utf8").toString().split("\n");

let num = String(input[0] * input[1] * input[2]);

for (let i = 0; i <= 9; i++) {
  console.log(num.split(i + "").length - 1);
}