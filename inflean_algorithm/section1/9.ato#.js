/**
 * 대문자로 이루어진 영어단어가 입력되면
 * 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력하는 프로그램을 작성하세요.
 */

// 내 답
function solution(s) {
  return s.replace(/A/g, '#') // 대소구분 안할거면 /A/gi
}

// 선생님 답
function solution(s) {
  // 문자열은 주소참조가 아니라 값이 복사돼서 여기서는 s를 수정해도 answer에 반영이 안됨
  let answer = ''
  for (let x of s) {
    if (x === 'A') answer += '#'
    else answer += x
  }
  return answer
}

let str = 'BANANA'
console.log(solution(str))
