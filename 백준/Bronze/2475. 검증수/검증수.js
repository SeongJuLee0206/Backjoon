const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "..", "2475", "input.txt");

const input = fs.readFileSync(filePath, "utf8").toString().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);
const D = parseInt(input[3]);
const E = parseInt(input[4]);

const answer = A * A + B * B + C * C + D * D + E * E;
console.log(answer % 10);