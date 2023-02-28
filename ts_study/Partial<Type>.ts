type Partial1<T> = {
    [P in keyof T] ?: T[P]
}

type Props = {a:number, b:number, c:number}
type PartialProps = Partial1<Props>

let p1:Props = {
    a: 1,
    b: 1,
    c: 1, 
}

let p2:PartialProps = {
    a: 1,
}