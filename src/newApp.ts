// GENERICS
const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "yoshi", age: 40 });
// let docTwo = addUID("hello");
// console.log(docOne.name);

// ENUM type
enum ResorceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRCTOR,
  PERSION,
}

interface Resorce<T> {
  uid: number;
  resorceName: ResorceType;
  data: T;
}

const docThree: Resorce<string> = {
  uid: 1,
  resorceName: ResorceType.AUTHOR,
  data: "Benyamin",
};

const docFour: Resorce<string[]> = {
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

let tup: [string, number, boolean] = ["Benyamin", 85, true];
