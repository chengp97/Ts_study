// enum Direction {
//     Up,
//     Down,
//     Right,
//     Left
// }

enum Direction {
    Up = "up",
    Down = "down",
    Right = "right",
    Left = "left"
}

function changeDirection(direction: Direction){
    console.log(direction)
}

changeDirection(Direction.Up)