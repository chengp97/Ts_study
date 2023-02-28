// 联合类型（Union Types）表示取值可以为多种类型中的一种。
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：

let myNumber: string | number;
myNumber = "seven";
myNumber = 7;
// myNumber = true;

// function getLength(something: string | number): number {
//   return something.length;
// }

function getString(something: string | number): string {
  return something.toString();
}

let Numbers: string | number;
Numbers = "seven";
console.log(Numbers.length); // 5
Numbers = 7;
console.log(Numbers.length);
