// 「类型 + 方括号」表示法
// let fibonacci: number[] = [1, 2, 3, 5];
// fibonacci.push("8");
// 数组泛型
// let fibonacci: Array<number> = [1, 1, 2, 3, 5];
// 用接口表示数组
interface NumberArray {
  [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
// 类数组
function sum() {
  let args: {
    [index: number]: number;
    length: number;
    callee: Function;
  } = arguments;
}
// any 在数组中的应用
let list: any[] = ["xcatliu", 25, { website: "http://xcatliu.com" }];
