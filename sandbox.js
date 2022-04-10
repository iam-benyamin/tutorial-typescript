var myName = 'Benyamin';
var age = 21;
var isBlackBelt = false;
var inputs = document.querySelectorAll('input');
// in typescript we can not assign value with diffrent type to a variable
// type 'string' is not assignable to type 'number'.
// age = 'sara';
inputs.forEach(function (input) {
    console.log(input);
});
// in typescript we cat forse function to get spesific input type by using ":"
// end of the variable like this example  
var circ = function (diameter) {
    return diameter * Math.PI;
};
// console.log(circ("radius value"));
console.log(circ(4));
// array 
// in typescript the value of variable is fixed and also the variable is fixed to 
// so if we define a property we can't change that.
var names = ['sara', 'benyamin', 'milad'];
names.push('ali');
// Argument of type 'number' is not assignable to parameter of type 'string'.
// names.push(5);
var numbers = [1, 5, 7, 29, 83, 11];
numbers.push(20);
//  Argument of type 'string' is not assignable to parameter of type 'number'.
// numbers.push('ahmad');
var mixed = ['ali', 38, 'kam', 88, 11, '8u274', 5];
mixed.push('milad');
mixed.push(55);
console.log(mixed);
// object
var person = {
    name: 'Benyamin',
    age: 21,
    job: 'programmer'
};
person.age = 22;
// Type 'string' is not assignable to type 'number'.
// person.age = 'ale';
