const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "..", "2675", "input.txt");
let input = fs.readFileSync(filePath, "utf8").toString().split("\n");

let num = Number(input[0]);
for (let i = 1; i < 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}