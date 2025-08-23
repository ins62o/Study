/**
 * Let's make a game 🕹
 */

type direction = "up" | "down" | "left" | "right";
let position = { x: 0, y: 0 };

function move(direction: direction) {
  switch (direction) {
    case "up":
      position = { ...position, y: position.y + 1 };
      break;
    case "down":
      position = { ...position, y: position.y - 1 };
      break;
    case "left":
      position = { ...position, x: position.x - 1 };
      break;
    case "right":
      position = { ...position, x: position.x + 1 };
      break;
  }
}

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
