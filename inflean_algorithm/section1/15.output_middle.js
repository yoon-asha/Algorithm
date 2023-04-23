/** 가운데 문자 출력
 * 소문자로 된 단어(문자열)가 입력되면
 * 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.
 * 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
 *
 * 입력설명
 * 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
 *
 * 출력설명
 * 가운데 문자를 출력합니다.
 */

// 내 답
function solution(s) {
  let num = s.length
  let index = Math.floor(num / 2)
  if (num % 2 === 1) {
    return s[index]
  } else {
    return s[index - 1] + s[index]
  }
}

// 선생님 답
function solution(s) {
  let answer
  let mid = Math.floor(s.length / 2)
  // substring(n부터, m전 까지)
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1)
  else answer = s.substring(mid - 1, mid + 1)

  // substr(n부터, m개)
  // if(s.length%2===1) answer=s.substr(mid, 1);
  // else answer=s.substr(mid-1, 2);
  return answer
}

console.log(solution('study'))
console.log(solution('good'))
console.log(solution('beautiful'))
