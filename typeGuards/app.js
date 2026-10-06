"use strict";
// type guards -> type narrowingl 
function fun(arg) {
    if (arg === 'number') {
        return 'number';
    }
    else if (arg === 'String') {
        return 'String';
    }
    else {
        throw new Error("aby ma chuda na ");
    }
}
console.log(fun(12));
console.log(fun("loda"));
console.log(fun(true));
