/**
 * 연필 1 다스는 12자루
 * 학생 1인당 1자루씩 나눠준다고 할 때 
 * n명의 학생 수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
 */

// ceil = 올림  floor = 내림 round = 반올림

function solution(n) {
  let answer = 0
  answer = Math.ceil(n / 12);
  return answer
}

console.log('1= ' + solution(12))
console.log('2= ' + solution(20))
console.log('3= ' + solution(100))
console.log('4= ' + solution(5))