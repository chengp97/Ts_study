type Props =  {a: number,b: string,c: boolean}

type TypeA = Props[keyof Props]
