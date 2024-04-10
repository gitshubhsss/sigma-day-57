// const argv=process.argv;

// for(i=2;i<argv.length;i++){
//     console.log("hellow welcome to node js",argv[i]);
// }

// const someValue=require("./math.js");


// console.log(someValue.sum(5,5));
// console.log(someValue.mul(5,5));c
// console.log(someValue.PI);
// console.log(somceeValue.f);

// const fruitNames=require("./backend");
// console.log(fruitNames[0].name);

import { sum } from "./math.js";
console.log(sum(1,5));



import { generate } from "random-words";
console.log(generate(5));