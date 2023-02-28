"use strict";
let arr = [
    {
        name: "cp0"
    },
    {
        name: "cp1"
    }, {
        name: "cp2"
    }
];
function getLength(obj) {
    return obj.length;
}
console.log(getLength(["1", "2"]));
function logPoint(p) {
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
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // 打印 "13, 56"
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());
function sanitizeInput(str) {
    return sanitize(str);
}
// 创建一个经过清理的输入框
let userInput = sanitizeInput(getInput());
// 仍然可以使用字符串重新赋值
userInput = "new input";
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
