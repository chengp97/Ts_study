type PropKeys = "a"|"b"|"c"
type Type1 = { [key in PropKeys]:number }

let obj: Type1 = {
    a: 1,
    b: 2,
    c: 3
}

type Prop1 = { a: number, b: string,c: boolean }
type Type2 = {[key in keyof Prop1]:string}

let obj2: Type2 = {
    a:'1',
    b:'2',
    c:'3',
}