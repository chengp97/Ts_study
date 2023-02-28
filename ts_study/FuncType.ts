function add(num1:number, num2:number): number{
    return num1 + num2;
}
console.log(add(1,1))

const add2: (num1:number, num2:number) => number = (num1,num2)=>{
   return num1 += num2;
}

function greet(name:string): void{
    console.log("hello",name);
}

greet("zcc")