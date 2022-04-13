// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// Type 'string' is not assignable to type 'number'.
// age = 'ale';
age = 21;
isLoggedIn = true;

// array
let ninja: string[] = [];

// ninja = ['ali', 'Benyamin'];
ninja.push('alc');

let mixed: (string|number)[] = [];

mixed.push(20);
mixed.push('milad');
// we cat define boolean because I do not declear this
// when define variable
// mixed.push(true)
console.log(mixed);


// objects
// in this way student cat be array because array is kind of objects
let student: object;

// so we define object variable like this
let teachers: {
    name: string;
    deggre: number;
    isGood: boolean;
};

// any type
// this type can be chage to other types
let gender: any;
gender = "male";
console.log(gender);

gender = 1;
console.log(gender);

let mixedOfAnyArray: any[] = [];
mixedOfAnyArray.push('ale');
mixedOfAnyArray.push(25);
mixedOfAnyArray.push(true);
console.log(mixedOfAnyArray);
