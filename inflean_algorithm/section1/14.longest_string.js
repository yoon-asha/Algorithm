/** 가장 긴 문자열
 * n개의 문자열이 입력되면 그 중 가장 긴 문자열 출력하는 프로그램을 작성하세요.
 * 
 * 입력설명
 * 첫 줄에 자연수 n이 주어진다. (3<=n<=30)
 * 두 번째 줄부터 n개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다.
 * 각 문자열의 길이는 서로 다릅니다.
 */

// 내 답
function solution(arr) {
  let answer = ''
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > answer.length) {
      answer = arr[i]
    }
  }
  return answer
}

// 선생님 답
function solution(s) {
  let answer = "",
    max = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}


let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
