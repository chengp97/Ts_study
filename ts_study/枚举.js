// enum Direction {
//     Up,
//     Down,
//     Right,
//     Left
// }
var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Down"] = "down";
    Direction["Right"] = "right";
    Direction["Left"] = "left";
})(Direction || (Direction = {}));
function changeDirection(direction) {
    console.log(direction);
}
changeDirection(Direction.Up);
