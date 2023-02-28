class GenericNumber<NumType>{
    defaultValue: NumType
    add:(x:NumType,y:NumType) => NumType
}

const myNum = new GenericNumber<number>()
myNum.defaultValue = 10