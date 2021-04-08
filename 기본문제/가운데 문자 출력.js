function solution(str) {
  let answer = '';
  let middle = Math.floor(str.length / 2);
  if (str.length % 2 === 0) {
    answer = str.substring(middle - 1, middle + 1);
    return answer;
  }
  if (str.length % 2 !== 0) {
    answer = str.substring(middle, middle + 1);
    return answer;
  }
}

let str1 = 'study';
let str2 = 'good';
console.log(`입력 예제 1 : ${solution(str1)}`);
console.log(`입력 예제 2 : ${solution(str2)}`);

// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세 요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄에 가운데 문자를 출력합니다.
// ▣ 입력예제 1
// study
// ▣ 출력예제 1
// u
// ▣ 입력예제 2
// good
// ▣ 출력예제 2
// oo
