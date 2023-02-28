let zname: string = "hello1"
let age: number = 10
let male: boolean = false
let hobbies: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]

// 元组 数量和类型是固定的
let cp: [string, number] = ["cp", 26]
let point: [number, number] = [100, 200]

// 枚举类型
enum Gender {
  Boy,
  Girl,
}
let g1: Gender = Gender.Boy
let g2: Gender = Gender.Girl
console.log(g1, g2)

// 常数枚举
const enum Color {
  RED = 2,
  GREEN,
  Yellow,
}
console.log(Color.GREEN)

// 任意类型
let name
name = "aa"
name = 1223
console.log(name)

// null 和 undefined number是子类型
// let x: number
// x = 10
// x = null
// x = undefined

// void 表示没有任何类型
function greeeting(name: string): void {
  console.log("first")
}

// never 表示不会出现的值
function sun(): never {
  while (true) { }
}

function minus(): never {
  throw new Error("minus")
}

function double(x: string | number) {
  if (typeof x === "number") {
    console.log(x)
  } else if (typeof x === "string") {
    console.log(x)
  } else {
    console.log(x)
  }
}
// 类型推断
let x = 10
// x = ""

// 联合类型
let age2: string | number
age2 = "cp"
// 类型断言
// (age2 as string).includes();
// (age2 as number).toFixed()

//字面量类型
let a: 1 | 2 | "a" | "b" = 2
console.log(a)

// 函数定义
function foo(x: string): string {
  return x
}
// 函数表达式
type GetFunction = (firstName: string, lastName: string) => string
let getUsername: GetFunction = function (firstName: string, lastName: string): string {
  return firstName + lastName
}

//可选参数
function print(x: string, y?: string): void {
  console.log(x, y)
}
print("a")
print("a", "b")

// 默认参数
function ajax(url: string, method: string = "GET") {
  console.log(url, method)
}
ajax("/common/sms", "PUT")
ajax("/common/smsCheck")

// 剩余参数
function sum(...numbers: number[]) {
  console.log(numbers)
}
sum(1, 2, 4, 5, 8)

// Ts重载 为一个函数提供多个函数定义

let obj = {
  name: "zhufeng",
  age: 10
}

function attr(val: string): void
function attr(val: number): void
function attr(val: any) {
  if (typeof val === "number") {
    obj.age = val
  } else if (typeof val === "string") {
    obj.name = val
  }
}


attr("cp")

attr(12)

// attr(true)

// 类
class Person {
  myname: string;
  constructor(myname: string) {
    this.myname = myname
  }
  get name(): string {
    return this.myname
  }
  set name(name: string) {
    this.myname = name
  }
}

let u = new Person("11")
console.log(u.name)
u.name = "John"
console.log(u.name)

// readonly
// 访问修饰符  public protected private 
class Animal {
  public readonly name: string;
  protected age: number = 38
  private money: number = 100
  constructor(name: string) {
    this.name = name
  }
}
let dog = new Animal("cp")
// dog.name = "John"

class Dog extends Animal {
  getAge(): void {
    console.log(this.age)
  }
  // private变量不能被子类访问，只能在类内部被访问
  getMoney(): void {
    // console.log(this.money)  
  }
}
// protected变量 不能被子类的实例访问
let littleDog = new Dog("hashiqi")
// littleDog.age

//抽象类
abstract class Car {
  name: string = '';
  abstract speak(): void;
}
//接口
interface CarHeader {
  fly(): void
}

interface CarFooter {
  fire(): void
}

class OldCar extends Car implements CarHeader, CarFooter {
  fire(): void {
    throw new Error("Method not implemented.")
  }
  speak(): void {
    console.log("嘟嘟嘟")
  }
  fly(): void {
    console.log("fly")
  }

}
// 重写
class NewCar extends Car {
  speak(): void {
    console.log("嗖嗖嗖")
  }
}
//重载
function changeObj(val: string): void
function changeObj(val: number): void
function changeObj(val: any) {
  if (typeof val === "number") {
    obj.age = val
  } else if (typeof val === "string") {
    obj.name = val
  }
}
changeObj("aa")



interface Speakable {
  speak(): void,
  name?: string
}

let speaker: Speakable = {
  name: "Speaker",
  speak() {
    console.log("first")
  }
}
//描述对象的属性，行为的抽象
interface Rectangle {
  width: number
  height: number
}

let r: Rectangle = {
  width: 100,
  height: 100
}

interface AnimalLike {
  eat(): void
  move(): void
  [propName: string]: any
}

interface DiscountInterface {
  (price: number): number
}

// 接口约束定义函数
let discount: DiscountInterface = function (price: number): number {
  return price * .8
}
discount(8)
interface SumInterface {
  (): number
}

let sum3: SumInterface = function (): number {
  let args: IArguments = arguments
  return Array.from(args).reduce((val, item) => val + item, 0)
}

// 可索引接口 对对象或数组进行约束
interface UserInterface {
  [index: number]: string
}

interface UserInterface2 {
  [index: string]: string
}

let users: UserInterface = ["zf", "cp"]
let users2: UserInterface2 = { name: "cp" }
console.log(users, users2)

// 类接口 用接口来约束构造函数的类型
class App1 {
  constructor(public name: string) { }
}
class App2 {
  constructor(public name: number) { }
}
let app1 = new App1("拼多多")

interface WitchNameClass {
  new(name: number): App2
}

function createClass(clazz: WitchNameClass, name: number) {
  return new clazz(name)
}
let app3 = createClass(App2, 200)
console.log(app1, app3)


// 泛型 宽泛的类型 不具体的类型

function createArray<T>(length: number, value: T): Array<T> {
  let array = new Array<T>(length)
  console.log(array.length)
  return array.fill(value)
}
console.log(createArray(3, 1))
// 泛型类
class MyArray<T> {
  private list: T[] = [];
  add(value: T) {
    this.list.push(value)
  }
  getMax(): T {
    let maxVal = this.list[0]
    this.list.forEach((value) => {
      if (value > maxVal) {
        maxVal = value
      }
    })
    return maxVal
  }
}

let array = new MyArray<number>();
array.add(1)
array.add(2)
console.log(array.getMax())


// 泛型接口 约束函数
interface Calculate {
  <T>(a: T, b: T): T
}

// 多个泛型
function swap<A, B>(tuples: [A, B]): [B, A] {
  return [tuples[1], tuples[0]]
}


interface LengthWise {
  length: number
}

function logger2<T extends LengthWise>(value: T) {
  console.log(value.length)
}

logger2("aa")

// 泛型接口
interface Cart<T> {
  list: T[]
}

let cart: Cart<number> = {
  list: [1, 23]
}

// 泛型别名
type Cart2<T> = { list: T[] } | T[]
let cart1: Cart2<number> = { list: [1, 2, 4] }
let cart2: Cart2<number> = [1, 2, 4]



let add: Calculate = (a, b) => a
add(1, 2)
export { }