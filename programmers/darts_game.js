function cal(s, n) {
  if (s === 'S') return n
  if (s === 'D') return n ** 2
  if (s === 'T') return n ** 3
}

function solution(dartResult) {
  /*
  s는 1제곱 d 2제곱 t 3제곱
  *은 지금 점수랑 앞에 점수 2배
  #은 지금 점수 -
  *은 효과는 중첩될 수 있다. 그럼 4배
  *과 #은 중첩될 수 있다. 그럼 -2배
 
 
  num과 str을 저장 > function cal에 넘겨서 계산
  계산 결과를 pre와 now로 저장
  다음에 *이나 #이 나온다면 계산해주고 answer에 더해주기
  pre와 now 값 갱신
  */
  let answer = 0
  let pre = 0,
    now = 0
  for (let i = 0; i < dartResult.length; i++) {
    pre = now

    let [num, str] = [dartResult[i], dartResult[i + 1]]
    if (!isNaN(Number(dartResult[i + 1]))) {
      num = dartResult[i] + dartResult[i + 1]
      str = dartResult[i + 2]
      i++
    }
    num = Number(num)

    now = cal(str, num)

    if (dartResult[i + 2] === '*') {
      answer -= pre
      pre *= 2
      now *= 2
      i++
      answer += pre
    } else if (dartResult[i + 2] === '#') {
      now = -now
      i++
    }
    i++
    answer += now

    // console.log('pre now ', pre, now, 'an = ', answer)
  }

  return answer
}

console.log(solution('1S2D*3T')) // 37
console.log(solution('1S2D#3T')) // 24
console.log(solution('1D2S#10S')) // 9
console.log(solution('1D2S0T')) // 3
console.log(solution('1S*2T*3S')) // 23
console.log(solution('1D#2S*3S')) // 5
console.log(solution('1T2D3D#')) // -4
console.log(solution('1D2S3T*')) // 59
