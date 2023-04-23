/**
 * 서울시는 6월 1일부터 교통 혼잡을 막기 위해 자동차 10부제를 시행한다.
 * 10부제는 차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면
 * 해당 자동차의 운행을 금지하는 것이다.
 * 예를 들어 차 번호의 일의 자리 숫자가 7이면 7일 17일 27일에는 운행하지 못한다.
 * 차 번호의 일의 자리 숫자가 0이면 10일 20일 30일에 운행하지 못한다.
 *
 * 일일 경찰관이 되어 10부제를 위반하는 자동차의 대수를 세는 봉사를 한다.
 * 날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때
 * 위반하는 자동차의 대수를 출력하는 프로그램을 작성하세요.
 *
 * 첫 줄에 날짜의 일의 자리 숫자, 둘째 줄에 자동차 7대의 끝 두 자리 번호가 주어진다.
 */

function solution(day, arr) {
  let answer = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === day) answer++
  }

  return answer
}

function solution2(day, arr) {
  let answer = 0
  for (x of arr) {
    if (x % 10 === day) answer++
  }
  return answer
}

console.log('1= ' + solution(0, [50, 21, 39, 10, 72, 84, 95])) // day가 0일 때
console.log('2= ' + solution(3, [70, 34, 52, 67, 89, 11, 23])) // 1개 일 때
console.log('3= ' + solution(2, [14, 10, 26, 35, 84, 51, 77])) // 위반이 없을 때
console.log('4= ' + solution(6, [18, 21, 56, 45, 56, 64, 72])) // 2개인데 중복일 때
