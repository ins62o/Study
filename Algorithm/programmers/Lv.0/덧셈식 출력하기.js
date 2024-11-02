/* 00:36 / 10:00 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  console.log(
    Number(input[0]),
    "+",
    Number(input[1]),
    "=",
    Number(input[0]) + Number(input[1])
  );
});

// input[0]과 input[1]을 형식대로 콘솔로그에 출력해주면 된다.
