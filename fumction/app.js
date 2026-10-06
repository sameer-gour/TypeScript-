"use strict";
function sameer(value, cb) {
    cb('sameer');
}
sameer('naam', (arg) => {
    console.log(arg);
});
