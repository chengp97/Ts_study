interface AnyObject {
    [key: string]: number;
}

let obj:AnyObject = {
    a:1,
    abc:1
};

interface MyArr<T>{
    [n:number]:T
}

let abc:MyArr<string> = ["1","2","3","4","5","6","7"]

console.log(abc[1])