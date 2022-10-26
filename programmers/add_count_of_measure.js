/* 약수의 개수와 덧셈
문제 설명

두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ left ≤ right ≤ 1,000
*/

// 내가 한 방법
function solution(left, right) {
  var answer = 0

  for (let i = left; i <= right; i++) {
    let num = []
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) num.push(j)
    }
    num.length % 2 === 0 ? (answer += i) : (answer -= i)
  }

  return answer
}

// 좋아 보이는 답
const isDivisorSizeOdd = (num) => {
  const res = [1]
  for (let i = 2; i <= num; ++i) num % i === 0 && res.push(i)

  return res.length & 1
}

function solution(left, right) {
  let answer = 0
  for (let i = left; i <= right; ++i)
    isDivisorSizeOdd(i) ? (answer -= i) : (answer += i)

  return answer
}
