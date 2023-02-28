interface Singable {
    sing(): void
    name: string
}

class Person implements Singable {
    name = "John";
    sing(){
        console.log("你是我的小呀小苹果")
    }
}