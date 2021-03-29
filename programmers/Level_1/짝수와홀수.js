function solution(num) {
  let answer = "";
  if (num % 2 === 0) {
    answer = "Even";
  } else {
    answer = "Odd";
  }
  return answer;
}

console.log("짝수", solution(4));
console.log("홀수", solution(3));
