"use strict"

function pow2 (a,b) {
    let result;
         {
            result = 1;
            for (let i=0; i < b; i++) {
            result *= a;
            }
        }
return result;
};

const prompt = require("prompt-sync")();
let number1 = prompt("Set number1 - ");
let number2 = prompt("Set number2 - ");
if (number2 >=0) {console.log (number1 + ' в степені ' + number2 + ' дорівнює ' + pow2(number1, number2))}
else {console.log (number1 + ' в степені ' + number2 + ' дорівнює ' + 1/pow2(number1, -(number2)))}
