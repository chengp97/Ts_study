"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let zname = "hello1";
let age = 10;
let male = false;
let hobbies = [1, 2, 3];
let arr2 = [1, 2, 3];
// 元组 数量和类型是固定的
let cp = ["cp", 26];
let point = [100, 200];
// 枚举类型
var Gender;
(function (Gender) {
    Gender[Gender["Boy"] = 0] = "Boy";
    Gender[Gender["Girl"] = 1] = "Girl";
})(Gender || (Gender = {}));
let g1 = Gender.Boy;
let g2 = Gender.Girl;
console.log(g1, g2);
console.log(3 /* Color.GREEN */);
// 任意类型
let name;
name = "aa";
name = 1223;
console.log(name);
// null 和 undefined number是子类型
// let x: number
// x = 10
// x = null
// x = undefined
// void 表示没有任何类型
function greeeting(name) {
    console.log("first");
}
// never 表示不会出现的值
function sun() {
    while (true) { }
}
function minus() {
    throw new Error("minus");
}
function double(x) {
    if (typeof x === "number") {
        console.log(x);
    }
    else if (typeof x === "string") {
        console.log(x);
    }
    else {
        console.log(x);
    }
}
// 类型推断
let x = 10;
// x = ""
// 联合类型
let age2;
age2 = "cp";
// 类型断言
// (age2 as string).includes();
// (age2 as number).toFixed()
//字面量类型
let a = 2;
console.log(a);
// 函数定义
function foo(x) {
    return x;
}
let getUsername = function (firstName, lastName) {
    return firstName + lastName;
};
//可选参数
function print(x, y) {
    console.log(x, y);
}
print("a");
print("a", "b");
// 默认参数
function ajax(url, method = "GET") {
    console.log(url, method);
}
ajax("/common/sms", "PUT");
ajax("/common/smsCheck");
// 剩余参数
function sum(...numbers) {
    console.log(numbers);
}
sum(1, 2, 4, 5, 8);
// Ts重载 为一个函数提供多个函数定义
let obj = {
    name: "zhufeng",
    age: 10
};
function attr(val) {
    if (typeof val === "number") {
        obj.age = val;
    }
    else if (typeof val === "string") {
        obj.name = val;
    }
}
attr("cp");
attr(12);
// attr(true)
// 类
class Person {
    constructor(myname) {
        this.myname = myname;
    }
    get name() {
        return this.myname;
    }
    set name(name) {
        this.myname = name;
    }
}
let u = new Person("11");
console.log(u.name);
u.name = "John";
console.log(u.name);
// readonly
// 访问修饰符  public protected private 
class Animal {
    constructor(name) {
        this.age = 38;
        this.money = 100;
        this.name = name;
    }
}
let dog = new Animal("cp");
// dog.name = "John"
class Dog extends Animal {
    getAge() {
        console.log(this.age);
    }
    // private变量不能被子类访问，只能在类内部被访问
    getMoney() {
        // console.log(this.money)  
    }
}
// protected变量 不能被子类的实例访问
let littleDog = new Dog("hashiqi");
// littleDog.age
//抽象类
class Car {
    constructor() {
        this.name = '';
    }
}
class OldCar extends Car {
    fire() {
        throw new Error("Method not implemented.");
    }
    speak() {
        console.log("嘟嘟嘟");
    }
    fly() {
        console.log("fly");
    }
}
// 重写
class NewCar extends Car {
    speak() {
        console.log("嗖嗖嗖");
    }
}
function changeObj(val) {
    if (typeof val === "number") {
        obj.age = val;
    }
    else if (typeof val === "string") {
        obj.name = val;
    }
}
changeObj("aa");
let speaker = {
    name: "Speaker",
    speak() {
        console.log("first");
    }
};
let r = {
    width: 100,
    height: 100
};
// 接口约束定义函数
let discount = function (price) {
    return price * .8;
};
discount(8);
let sum3 = function () {
    let args = arguments;
    return Array.from(args).reduce((val, item) => val + item, 0);
};
let users = ["zf", "cp"];
let users2 = { name: "cp" };
console.log(users, users2);
// 类接口 用接口来约束构造函数的类型
class App1 {
    constructor(name) {
        this.name = name;
    }
}
class App2 {
    constructor(name) {
        this.name = name;
    }
}
let app1 = new App1("拼多多");
function createClass(clazz, name) {
    return new clazz(name);
}
let app3 = createClass(App2, 200);
console.log(app1, app3);
// 泛型 宽泛的类型 不具体的类型
function createArray(length, value) {
    let array = new Array(length);
    console.log(array.length);
    return array.fill(value);
}
console.log(createArray(3, 1));
// 泛型类
class MyArray {
    constructor() {
        this.list = [];
    }
    add(value) {
        this.list.push(value);
    }
    getMax() {
        let maxVal = this.list[0];
        this.list.forEach((value) => {
            if (value > maxVal) {
                maxVal = value;
            }
        });
        return maxVal;
    }
}
let array = new MyArray();
array.add(1);
array.add(2);
console.log(array.getMax());
// 多个泛型
function swap(tuples) {
    return [tuples[1], tuples[0]];
}
function logger2(value) {
    console.log(value.length);
}
logger2("aa");
let cart = {
    list: [1, 23]
};
let cart1 = { list: [1, 2, 4] };
let cart2 = [1, 2, 4];
let add = (a, b) => a;
add(1, 2);
