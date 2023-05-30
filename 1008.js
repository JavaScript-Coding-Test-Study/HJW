//https://www.acmicpc.net/problem/1008
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let a = input[0];
let b = input[1];
console.log(a/b);