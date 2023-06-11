function solution(k, m, score) {
  let answer = 0
  score.sort((a, b) => b - a)
  while (score.length >= m) {
    answer += Math.min(...score.slice(0, m)) * m
    score.splice(0, m)
  }
  return answer
}

// 11- 15 시간 초과 - 해결 1
function solution(k, m, score) {
  let answer = 0
  score.sort((a, b) => b - a)
  let cnt = 0
  while (cnt < score.length) {
    const newScore = score.slice(cnt, cnt + m)
    cnt += m
    if (newScore.length === m) answer += Math.min(...newScore) * m
  }
  return answer
}

// 11- 15 시간 초과 - 해결 2
function solution(k, m, score) {
  let answer = 0
  score.sort((a, b) => a - b)
  while (score.length >= m) {
    let box = []
    for (let i = 0; i < m; i++) {
      box.push(score.pop())
    }
    answer += Math.min(...box) * m
  }
  return answer
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])) // 8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])) // 33
