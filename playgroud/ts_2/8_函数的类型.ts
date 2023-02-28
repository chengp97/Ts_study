// 函数声明
function sum(x: number, y: number): number {
  return x + y;
}
// 注意，输入多余的（或者少于要求的）参数，是不被允许的：
// sum(1, 2, 3);
// 函数表达式
// let mySum: (x: number, y: number) => number = function (
//   x: number,
//   y: number
// ): number {
//   return x + y;
// };

// // 用接口定义函数的形状
// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc;
// mySearch = function (source: string, subString: string) {
//   return source.search(subString) !== -1;
// };
// 可选参数
// function buildName(firstName?: string, lastName: string) {
//   if (firstName) {
//     return firstName + " " + lastName;
//   } else {
//     return lastName;
//   }
// }
// let tomcat = buildName("Tom", "Cat");
// let tom = buildName(undefined, "Tom");

// 参数默认值§
function buildName(firstName: string, lastName: string = "Cat") {
  return firstName + " " + lastName;
}
let tomcat = buildName("Tom", "Cat");
// let tom = buildName("Tom");

// 剩余参数§

function push(array, ...items) {
  items.forEach(function (item) {
    array.push(item);
  });
}

let a: any[] = [];
push(a, 1, 2, 3);
console.log(a);

// 重载

// function reverse(x: number | string): number | string | void {
//   if (typeof x === "number") {
//     return Number(x.toString().split("").reverse().join(""));
//   } else if (typeof x === "string") {
//     return x.split("").reverse().join("");
//   }
// }

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  }
}
