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
var circ = function (diameter) {
    return diameter * Math.PI;
};
// console.log(circ("radius value"));
console.log(circ(4));
