

interface Person { 
    name:string
    age:number
    sayHi:()=>void
    greet:(name:string)=>void
}

type Person2 = { 
    name:string
    age:number
    sayHi:()=>void
    greet:(name:string)=>void
}

let person: Person= {
    name: 'John',
    age: 18,
    sayHi(){},
    greet(name){}
}

let person1: Person= {
    name: 'John1',
    age: 20,
    sayHi(){},
    greet(name){}
}

let person2: Person2= {
    name: 'John1',
    age: 20,
    sayHi(){},
    greet(name){}
}