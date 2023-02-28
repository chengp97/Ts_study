// TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。
// 赋值的时候，变量的形状必须和接口的形状保持一致。
// 可选属性
// interface Person {
//   name: string;
//   age?: number;
// }

// let tom: Person = {
//   name: "Tom",
// };

//  任意属性

// interface Person {
//   name: string;
//   age?: number;
//   [propName: string]: any;
// }

// let tom1: Person = {
//   name: "Tom",
//   // age: 18,
//   gender: false,
// };

// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
// interface Person {
//   name: string;
//   age?: number;
//   [propName: string]: string | number;
// }

// let tom2: Person = {
//   name: "Tom",
//   age: 25,
//   gender: "male",
// };

// 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
interface Person {
  readonly id?: number;
  name: string;
  age?: number;
  [propName: string]: any;
}
let tom3: Person = {
  name: "Tom",
  age: 12,
  gender: "male",
};

tom3.id = 9527;
