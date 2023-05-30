//https://www.acmicpc.net/problem/1000

//공백을 기준으로 한줄로 입력을 받는 코드
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(input[0] + input[1]);

//input은 백준에서 input 받는걸 배열로 받는다.
//이 쉬운 코드도 채점 속도가 너무 느려서 이렇게 접근하는게 맞나 싶다..