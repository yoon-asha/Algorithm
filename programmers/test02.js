// n이 주어지면 1~n까지 쭉 늘어놓고 그중 n번째 숫자 리턴
function solution(n) {
  let num = 1
  let length = 1

  while (n > length * 9 * num) {
    n -= length * 9 * num
    length++
    num *= 10
  }

  let targetNum = num + Math.floor((n - 1) / length)
  let digitIndex = (n - 1) % length

  return parseInt(targetNum.toString()[digitIndex])
}
console.log(solution(21))
