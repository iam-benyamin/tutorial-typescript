const myName = 'Benyamin';
let age = 21;
let isBlackBelt = false;
const inputs = document.querySelectorAll('input');

// in typescript we can not assign value with diffrent type to a variable

// type 'string' is not assignable to type 'number'.
// age = 'sara';

inputs.forEach(input => {
    console.log(input);
});

// in typescript we cat forse function to get spesific input type by using ":"
// end of the variable like this example  
const circ = (diameter: number) => {
    return diameter * Math.PI;
}

// console.log(circ("radius value"));
console.log(circ(4));