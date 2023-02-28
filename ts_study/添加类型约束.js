function getProp(obj, key) {
    return obj[key];
}
getProp({ name: "string", age: 19 }, "age");
