// init config man is https://www.typescriptlang.org/tsconfig
console.log(`test for tsc --init`);

// functions
let greet: Function;


greet = () => {
    console.log('hello, world')
}

const add = (a: number, b: number, c?: number | string, d: number = 5): number => {
    // each function has return type
    // if function don't have return then return type is void
    // void id diffrent with undefind
    console.log(a + b);
    console.log(c); // c is optional
    return a + b + d;
}
add(8, 4);

let re = add(3, 9);
// re has add return type : here is number

const minus = (a: number, b: number):void => {
    console.log(a - b);
}

let menha = minus(7, 6);
console.log(`nenha type is ${typeof menha}`);

// define our type
type StringOrNumber = string | number;
type ObjWithName = {name: string, uid: StringOrNumber};


const logDetails = (uid: StringOrNumber, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const groot = (user: {name: string, uid: string | number}) => {
    console.log(`${user.name} say hello`);
}

const grootAgain = (user: ObjWithName) => {
    console.log(`${user.name} say hello`);
}

// function signiture
let def: (a: string, b: number) => void;
