/** 문자열 압축
 * 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우, 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하세요. 단 반복횟수가 1인 경우 생략합니다
 
▣ 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

▣ 출력설명
첫 줄에 압축된 문자열을 출력한다.

▣ 입력예제 1 
KKHSSSSSSSE

▣ 출력예제 1 
K2HS7E
 */
const solution = (s) => {
  let answer = {}
  s.split('').forEach((x) => {
    answer[x] = (answer[x] || 0)+1
    /** answer[x] = (answer[x] || 0)+1 이거랑 아래거랑 같은 뜻
     if(answer[x]) {
      answer[x] = answer[x] + 1
     }else {
      answer[x] = 0 + 1
     }
     */
  })
 return Object.entries(answer).join('').replace(/[1,]/g,'')
}
// 참고 https://velog.io/@kurikuri/JS-%EB%B0%B0%EC%97%B4%EB%82%B4-%EC%A4%91%EB%B3%B5%EC%A0%9C%EA%B1%B0-%EC%A4%91%EB%B3%B5%EC%B9%B4%EC%9A%B4%ED%8A%B8


// 선생님 답
function solution(s){
  let answer="";
  let cnt=1;
  s=s+" ";
  for(let i=0; i<s.length-1; i++){
      if(s[i]===s[i+1]) cnt++;
      else{
          answer+=s[i];
          if(cnt>1) answer+=String(cnt);
          cnt=1;
      }
  }
  return answer;
}

console.log(solution('KKHSSSSSSSE'))