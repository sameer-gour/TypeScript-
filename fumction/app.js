"use strict";
// Function in TypeScript
function fnc(value) {
    console.log("hello");
}
function fnc1(a, b) {
    return a + b;
}
//  Optional Parameter ?
function fnc2(name, age) {
    console.log(name, age);
}
// Default Parameter
function fnc3(name = 'user') {
    console.log(name);
}
// rest premeter
function fun4(...agr) {
    return agr;
}
console.log(fun4(1, 2, 3, 4, 5, 6));
// arrow fun 
let fun5 = (age) => {
    console.log(age);
};
function funn(value) {
    return value;
}
console.log(funn('sameer'));
console.log(funn(25));
function combine(a, b) {
    return a + b;
}
// function sameer(value:string, cb:(arg:string)=>void) {
//     cb('sameer')
// }
// sameer('naam',(arg:string)=>{
//     console.log(arg);
// })
// function overloding
