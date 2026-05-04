"use strict"

function filterEmail(arr) {
    return arr.filter(({email}) => {
        let  pattern = /^[a-zA-Z0-9]+[a-zA-Z0-9.]*@(gmail|yahoo)\.com$/;
        return email.match(pattern);
    });
    
};

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
console.log(filterEmail(arr));