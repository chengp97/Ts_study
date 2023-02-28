// class Person {
//     age: number;
//     gender: string;
//     constructor(age: number, gender: string) {
//         this.age = age;
//         this.gender = gender;
//     }
// }

// const p = new Person(19,"男")

// class Point{
//     x = 10
//     y = 10

//     scale(n: number){
//         this.x *= n;
//         this.y *= n;
//     }
// }

// const p = new Point()

// p.scale(10)

// console.log(p.x, p.y)

// class Person{
//     readonly age: number = 18
//     constructor(age: number) {
//         this.age = age;
//     }
//     setAge(){
//         this.age = 20
//     }
// }

class Person{
    readonly age: number= 18
    constructor(age: number) {
        this.age = age;
    }
    // setAge(){
    //     this.age = 20
    // }
}

// interface IPerson {
//    readonly name: string
// }

let person: { readonly name: string} = {
    name: "John"
}

person.name = "jack"