/** 대문자 찾기
 * 한 개의 문자열을 입력받아 해당 문자열에
 * 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성하세요.
 * 
 * 입력설명
 * 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
 * 
 * 출력설명
 * 첫 줄에 대문자의 개수를 출력한다.
 */

function solution(s) {
  let answer = 0
  for (let x of s) {
    if (x === x.toUpperCase()) answer++
  }
  return answer
}

// 대문자 65~90
// 소문자 97~122
function solution(s) {
  let answer = 0
  for (let x of s) {
    let num = x.charCodeAt()
    if (num >= 65 && num <= 90) answer++
  }
  return answer
}


console.log(solution('KoreaTimeGood'))