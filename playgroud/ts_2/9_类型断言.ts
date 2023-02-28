// 值 as 类型
// interface Cat {
//   name: string;
//   run(): void;
// }
// interface Fish {
//   name: string;
//   swim(): void;
// }

// function getName(animal: Cat | Fish) {
//   return animal.name;
// }

// interface Cat {
//   name: string;
//   run(): void;
// }
// interface Fish {
//   name: string;
//   swim(): void;
// }

// function isFish(animal: Cat | Fish) {
//   if (typeof animal.swim === "function") {
//     return true;
//   }
//   return false;
// }

// interface Cat {
//   name: string;
//   run(): void;
// }
// interface Fish {
//   name: string;
//   swim(): void;
// }

// function isFish(animal: Cat | Fish) {
//   if (typeof (animal as Fish).swim === "function") {
//     return true;
//   }
//   return false;
// }

// interface Cat {
//   name: string;
//   run(): void;
// }
// interface Fish {
//   name: string;
//   swim(): void;
// }

// function swim(animal: Cat | Fish) {
//   (animal as Fish).swim();
// }

// const tom: Cat = {
//   name: "Tom",
//   run() {
//     console.log("run");
//   },
// };
// swim(tom);

// (window as any).foo = 1;

// 将 any 断言为一个具体的类型§
function getCacheData(key: string): any {
  return (window as any).cache[key];
}

interface Cat {
  name: string;
  run(): void;
}

const tom = getCacheData("tom") as Cat;
tom.run();
