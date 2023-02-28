interface Props {
    id: string
    children: number[];
}

type PartialProps = Partial<Props>;

let p1:Props = {
    id: "1",
    children:[1,2]
}

let p2:PartialProps = {
    // id: "1",
    // children:[1,2]
}