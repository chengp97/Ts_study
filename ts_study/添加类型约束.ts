function  getProp<Type,Key extends keyof Type>(obj:Type,key:Key){
    return obj[key];
}

getProp({ name: "string",age:19},"age")