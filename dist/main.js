"use strict";
let userName = 'user';
console.log(typeof userName);
let age = 10;
let isStudent = true;
let hobbies = ['reading', 'coding'];
let gender = 'male';
var Month;
(function (Month) {
    Month[Month["JAN"] = 1] = "JAN";
    Month[Month["FEB"] = 2] = "FEB";
    Month[Month["MAR"] = 3] = "MAR";
    Month[Month["APR"] = 4] = "APR";
    Month[Month["MAY"] = 5] = "MAY";
    Month[Month["JUN"] = 6] = "JUN";
    Month[Month["JUL"] = 7] = "JUL";
    Month[Month["AUG"] = 8] = "AUG";
    Month[Month["SEP"] = 9] = "SEP";
    Month[Month["OCT"] = 10] = "OCT";
    Month[Month["NOV"] = 11] = "NOV";
    Month[Month["DEC"] = 12] = "DEC";
})(Month || (Month = {}));
let month = Month.JUN;
let x;
x = 'hello';
x = 10;
x = true;
x = ['a', 'b'];
const sum = (n1, n2) => {
    return n1 + n2;
};
function greet(name) {
    console.log(`Hello ${name}`);
}
const book = {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Adventure',
};
const course = {
    title: 'React',
    duration: 40,
};
let mixed;
mixed = 10;
mixed = 'hello';
let mixedArray;
mixedArray = [10, 'hello'];
let person;
person = ['user', 30, 'female', true];
let message = 'Hello';
let messageLength = message.length;
//# sourceMappingURL=main.js.map