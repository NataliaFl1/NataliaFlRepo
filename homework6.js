"use strict";

function randomNumber (min, max) {
let rnd = Math.floor(Math.random() * (max - min + 1)) + min;
return rnd;
}

function checkProbabilityTheory(count) {
    console.log (`Кількість випадкових чисел - ${count}`);
    let par = 0;
    let nepar = 0;
    for (let i=0; i<count; i++) {
        let rnd = randomNumber(100, 1000);
        if (rnd % 2) {nepar+=1}
        else {par+=1}
}
console.log (`Кількість парних чисел - ${par}`);
console.log (`Кількість непарних чисел - ${nepar}`);
var vidsotokPar = (par/count * 100).toFixed(2);
var vidsotokNepar = (nepar/count * 100).toFixed(2);
console.log (`Відсоток парних до непарних - ${vidsotokPar} % до ${vidsotokNepar} % `);
}
checkProbabilityTheory(400);