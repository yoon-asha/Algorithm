/** 중복 단어 제거
 * n개의 문자열이 입력되면
 * 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
 * 출력하는 문자열은 원래의 입력순서를 유지합니다.
 * 
 * 입력설명
 * 첫 줄에 자연수 n이 주어진다. (3 <= n <= 30)
 * 
 * 출력설명
 * 첫 줄부터 중복이 제거된 문자열을 차례로 출력한다.
 */

// 내 답
function solution(s) {
  return [...new Set(s)]
}

// 선생님 답

function solution(s) {
  let answer;
  //console.log(s.indexOf("student"));
  answer = s.filter((v, i) => {
    //console.log(v, i);
    // if (s.indexOf(v) === i) return v;
    return s.indexOf(v) === i
  });
  return answer;
}



let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
