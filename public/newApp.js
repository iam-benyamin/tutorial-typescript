"use strict";
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "yoshi", age: 40 });
// let docTwo = addUID("hello");
// console.log(docOne.name);
// ENUM type
var ResorceType;
(function (ResorceType) {
    ResorceType[ResorceType["BOOK"] = 0] = "BOOK";
    ResorceType[ResorceType["AUTHOR"] = 1] = "AUTHOR";
    ResorceType[ResorceType["FILM"] = 2] = "FILM";
    ResorceType[ResorceType["DIRCTOR"] = 3] = "DIRCTOR";
    ResorceType[ResorceType["PERSION"] = 4] = "PERSION";
})(ResorceType || (ResorceType = {}));
const docThree = {
    uid: 1,
    resorceName: ResorceType.AUTHOR,
    data: "Benyamin",
};
const docFour = {
    uid: 2,
    resorceName: ResorceType.DIRCTOR,
    data: ["Benyamin", "sart", "Milad"],
};
console.log(docThree, docFour);
// tuples
let arr = ["ryu", 25, true];
arr[0] = false;
arr[1] = "Benyamin";
arr = [54, "sara", false];
let tup = ["Benyamin", 85, true];
