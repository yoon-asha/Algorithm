function solution(s) {
  var answer = 0
  let x = '',
    xcnt = 0,
    ocnt = 0

  for (let str of s) {
    if (!x) x = str

    if (x === str) xcnt++
    else ocnt++

    if (xcnt === ocnt) {
      answer++
      xcnt = 0
      ocnt = 0
      x = ''
    }
  }

  if (x) answer++

  return answer
}

console.log(solution('banana')) // 3
// console.log(solution('abracadabra')) // 6
// console.log(solution('aaabbaccccabba')) // 3
