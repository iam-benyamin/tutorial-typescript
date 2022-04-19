"use strict";
// init config man is https://www.typescriptlang.org/tsconfig
console.log(`test for tsc --init`);
// functions
let greet;
greet = () => {
    console.log('hello, world');
};
const add = (a, b, c, d = 5) => {
    // each function has return type
    // if function don't have return then return type is void
    // void id diffrent with undefind
    console.log(a + b);
    console.log(c); // c is optional
    return a + b + d;
};
add(8, 4);
let re = add(3, 9);
// re has add return type : here is number
const minus = (a, b) => {
    console.log(a - b);
};
let menha = minus(7, 6);
console.log(`nenha type is ${typeof menha}`);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const groot = (user) => {
    console.log(`${user.name} say hello`);
};
const grootAgain = (user) => {
    console.log(`${user.name} say hello`);
};
// function signiture
let def;
