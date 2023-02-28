type ObjectWithNameArray = Array<{ name: string }>;
let arr: ObjectWithNameArray = [
  {
    name: "cp0"
  },
  {
    name: "cp1"
  }, {
    name: "cp2"
  }
]

function getLength(obj: string | string[]) {
  return obj.length;
}
console.log(getLength(["1", "2"]))


// interface Backpack<Type> {
//   add: (obj: Type) => void;
//   get: () => Type;
// }

// // 这一行是一个简写，可以告诉 TypeScript 有一个常量，叫做`backpack`，并且不用担心它是从哪
// // 里来的。
// declare const backpack: Backpack<string>;

// // 对象是一个字符串，因为我们在上面声明了它作为 Backpack 的变量部分。
// const object = backpack.get();

// // 因为 backpack 变量是一个字符串，不能将数字传递给 add 函数。
// backpack.add("23")


interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// 打印 "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // 打印 "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // 打印 "33, 3"

const color = { hex: "#187ABF" };
// logPoint(color);


// ---分割线---
class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // 打印 "13, 56"

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());


declare function getInput(): string;
declare function sanitize(str: string): string;
// ---分割---
type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}

// 创建一个经过清理的输入框
let userInput = sanitizeInput(getInput());

// 仍然可以使用字符串重新赋值
userInput = "new input";

interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
