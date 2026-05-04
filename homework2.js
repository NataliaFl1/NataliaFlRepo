var str = "Wonderful, Joyful, Happiness, Time, Task, Apple";
pattern = /\b[^Aa\s,]{6,}\b/g;
res = str.match(pattern);
console.log(res);