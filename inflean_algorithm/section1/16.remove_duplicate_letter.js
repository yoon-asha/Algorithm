/** 중복 문자 제거
 * 소문자로 된 한 개의 문자열이 입력되면 
 * 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요.
 * 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.
 */

function solution(s) {
  // set에는 중복된 문자가 들어올 수 없다!
  // [...new Set(s)] >> ["k", "e", "s", "t"]
  // [...new Set(s)].join() >> "k,e,s,t"
  // [...new Set(s)].join(') >> "kest"
  return [...new Set(s)].join('')
}

function solution(s) {
  let answer = ''
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i]
  }
  return answer
}

// indexOf로 특정 문자 중복 개수 찾기
function indexOfLetter(s) {
  let answer = 0
  let pos = s.indexOf('k')
  while (pos !== 1) {
    answer++
    pos = s.indexOf('k', pos + 1)
  }
  return answer
}


console.log(solution('keskkset')) // kset
console.log(indexOfLetter('keskkset')) // 3