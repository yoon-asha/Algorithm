let n = Number(require('fs').readFileSync('./input.txt').toString().trim())

let k = 1
let s = 0
function solution(n, k, s) {
  while (n > 0) {
    k++
    if (n > k) {
      n -= k
      s++
    }
    if (n <= k) {
      k = 1
      n -= k
      s++
    }
  }
  return s
}

console.log(solution(n, k, s))

/*
14 // 7

1 // 1

3 // 2

4 // 3

100 // 18
*/
