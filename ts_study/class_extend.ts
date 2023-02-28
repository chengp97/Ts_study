class Animal {
    private move() {
        console.log("走两步")
    }
    run(){
        console.log("跑起来")
    }
}
const a = new Animal()

class Dog extends Animal {
    name = "二哈"
    bark() {
        console.log("汪汪")
    }
}

const dog = new Dog();

dog.move()

dog.bark()
console.log(dog.name)