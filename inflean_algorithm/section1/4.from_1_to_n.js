/**
 * 자연수 n이 입력되면 1부터 n까지의 합을 출력하는 프로그램을 작성하세요.
 * n은 20이하
 */

function solution(n) {
  let answer = 0
  for (let i = 1; i <= n; i++) answer = answer + i
  return answer
}

console.log('1= ' + solution(3))
console.log('2= ' + solution(7))
console.log('3= ' + solution(14))
console.log('4= ' + solution(18))