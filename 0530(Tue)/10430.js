//https://www.acmicpc.net/problem/10430

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
// const input =[5 ,8 ,4];
let A = input[0];
let B = input[1];
let C = input[2];

console.log((A+B)%C);
console.log(((A%C)+(B%C))%C);
console.log((A*B)%C);
console.log(((A%C) * (B%C))%C);