interface Person {
    name: string
}

interface Email {
    email: string
}

type PersonData = Person & Email

let obj: PersonData = {
    name: 'John',
    email: 'john@example.com'
}