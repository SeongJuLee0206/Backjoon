const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "..", "1152", "input.txt");

const input = fs.readFileSync(filePath, "utf8").split(" ");

let count = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i].trim() !== "") {
    count++;
  }
}

console.log(count);
