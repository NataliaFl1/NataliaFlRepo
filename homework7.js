"use strict"

var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн",

addOrUpdateService: function (key, value) {
    services[key] = value
},

price: function () {
    let result = 0;
    let val = Object.values(services);
        for (let key in val) {
            if (isNaN(parseFloat(val[key]))) continue;
        result+= parseFloat(val[key]);
        }
    return result;
},

minPrice: function(){
    let val = Object.values(services);
    let result = parseFloat(val[0]);
        for (let key in val) {
            if (isNaN(parseFloat(val[key]))) continue;
            if (parseFloat(val[key]) < result) 
                result = parseFloat(val[key]);
        }
    return result;
},

maxPrice: function(){
    let val = Object.values(services);
    let result = parseFloat(val[0]);
        for (let key in val) {
            if (isNaN(parseFloat(val[key]))) continue;
            if (parseFloat(val[key]) > result) 
                result = parseFloat(val[key]);
        }
    return result;
},
}


services.addOrUpdateService("манікюр", "700 грн");
services.addOrUpdateService("педикюр", "800 грн");
delete services["гоління"];
services.addOrUpdateService("стрижка", "600 грн");
services.addOrUpdateService("борода", "500 грн");
services.addOrUpdateService("борода", "1000 грн");
console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());

