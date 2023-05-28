function solution(targets) {
  let answer = 0,
    prev = 0
  const len = targets.length

  targets.sort((a, b) => a[1] - b[1])

  for (let i = 0; i < len; i++) {
    const [a, b] = targets[i]

    if (prev <= a) {
      prev = b
      answer += 1
    }
  }

  return answer
}

/**
a나라 x축에 평행한 직선
양수를 포함하지 않는 개구간을 나타내는 정수 (s, e)로 표현

b나라 x에서 y축에 수평이 되도록
x좌표에 걸쳐있는 모든 미사일 통과해서 한 번에 요격 가능

개구간 (s,e)로 표현되는 미사일은 s와 e에서 발사하는 미사일로는 요격 불가
미사일은 실수인 x좌표에서도 발사 가능

target이 매개변수로 주어질 때
모든 미사일을 요격하기 위한 미사일 수의 최소값을 리턴
 */

console.log(
  solution([
    [4, 5],
    [4, 8],
    [10, 14],
    [11, 13],
    [5, 12],
    [3, 7],
    [1, 4],
  ])
) // 3
