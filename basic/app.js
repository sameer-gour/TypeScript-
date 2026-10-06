"use strict";
let naam = 'sameer';
let age = 22;
console.log(naam, age);
let istrue = true;
let arr = [2, 3, 4, 6, 7];
let skill = ['js', 'ts'];
let user = ['sameer', 22];
let user2 = {
    naam: 'sameeer',
    age: 22
};
// any
let data = 10;
// Why does any exist?
// Because it disables TypeScript's type checking and can allow runtime errors.
let naam1 = 'sameer';
naam1 = 256;
naam1 = true;
let n = null;
// i naver assine a vlue couz i give null type
let nn = null;
function abcd(obj) {
    console.log(obj.admin, obj.naam, obj.age, obj.city, obj.gender);
}
abcd({ admin: true, naam: 'sam', age: 22, city: "roorkee", });
let naam3 = 'sameer';
